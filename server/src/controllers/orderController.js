import { getDb } from "../config/db.js";
import { fetchOrders } from "../services/mysqlService.js";

const POINTS_PER_EURO = 10;
const REDEEM_BLOCK = 100;
const REDEEM_VALUE = 1;

export const createOrder = async (req, res) => {
  const {
    items,
    firstName,
    lastName,
    phone,
    fulfillmentType = "delivery",
    deliveryAddress = "",
    notes = "",
    redeemPoints = 0
  } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Order items are required" });
  }

  const db = getDb();
  const productIds = items.map((item) => Number(item.product));
  const [products] = await db.query(
    `SELECT * FROM products WHERE id IN (${productIds.map(() => "?").join(",")})`,
    productIds
  );

  const normalizedItems = items.map((item) => {
    const product = products.find((entry) => String(entry.id) === String(item.product));

    if (!product) {
      throw new Error(`Product not found: ${item.product}`);
    }

    const unitPrice =
      Boolean(product.promo_active) && product.promo_price != null ? Number(product.promo_price) : Number(product.price);

    return {
      productId: product.id,
      name: product.name,
      price: unitPrice,
      quantity: Number(item.quantity),
      image: product.image
    };
  });

  const subtotal = normalizedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [userRows] = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [req.user.id]);
  const user = userRows[0];

  const maxRedeemableBlocks = Math.floor(Number(user.points) / REDEEM_BLOCK);
  const requestedBlocks = Math.floor(Number(redeemPoints) / REDEEM_BLOCK);
  const appliedBlocks = Math.min(maxRedeemableBlocks, requestedBlocks);
  const pointsRedeemed = appliedBlocks * REDEEM_BLOCK;
  const discount = appliedBlocks * REDEEM_VALUE;
  const total = Math.max(subtotal - discount, 0);
  const pointsEarned = Math.floor(total * POINTS_PER_EURO);

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    const [orderResult] = await connection.query(
      `
        INSERT INTO orders (user_id, first_name, last_name, phone, fulfillment_type, total, status, points_earned, points_redeemed, delivery_address, notes)
        VALUES (?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?, ?)
      `,
      [
        req.user.id,
        firstName,
        lastName,
        phone,
        fulfillmentType,
        total,
        pointsEarned,
        pointsRedeemed,
        fulfillmentType === "delivery" ? deliveryAddress : "",
        notes
      ]
    );

    for (const item of normalizedItems) {
      await connection.query(
        `
          INSERT INTO order_items (order_id, product_id, name, price, quantity, image)
          VALUES (?, ?, ?, ?, ?, ?)
        `,
        [orderResult.insertId, item.productId, item.name, item.price, item.quantity, item.image]
      );
    }

    await connection.query("UPDATE users SET points = points + ? WHERE id = ?", [
      pointsEarned - pointsRedeemed,
      req.user.id
    ]);

    await connection.commit();
    const [orders] = await Promise.all([fetchOrders({ userId: req.user.id, includeUser: true })]);
    const createdOrder = orders.find((order) => order.id === String(orderResult.insertId));
    return res.status(201).json(createdOrder);
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

export const getMyOrders = async (req, res) => {
  const orders = await fetchOrders({ userId: req.user.id, includeUser: false });
  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  const orders = await fetchOrders({ includeUser: true });
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  const db = getDb();
  const [result] = await db.query("UPDATE orders SET status = ? WHERE id = ?", [req.body.status, req.params.id]);

  if (!result.affectedRows) {
    return res.status(404).json({ message: "Order not found" });
  }

  const orders = await fetchOrders({ includeUser: true });
  const order = orders.find((entry) => entry.id === String(req.params.id));
  res.json(order);
};
