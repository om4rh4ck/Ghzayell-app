import { getDb } from "../config/db.js";

const normalizeMediaPath = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;

  const withoutPublicPrefix = raw
    .replace(/\\/g, "/")
    .replace(/^\.?\//, "")
    .replace(/^public\//i, "");

  if (withoutPublicPrefix.startsWith("uploads/")) {
    return `/${withoutPublicPrefix}`;
  }

  if (withoutPublicPrefix.startsWith("/uploads/")) {
    return withoutPublicPrefix;
  }

  if (!withoutPublicPrefix.includes("/")) {
    return `/uploads/${withoutPublicPrefix}`;
  }

  return `/${withoutPublicPrefix}`;
};

export const mapUser = (row) => ({
  _id: String(row.id),
  id: String(row.id),
  name: row.name,
  email: row.email,
  role: row.role,
  points: Number(row.points),
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

export const mapProduct = (row) => {
  const promoActive = Boolean(row.promo_active);
  const promoPrice = row.promo_price == null ? null : Number(row.promo_price);
  const price = Number(row.price);

  return {
    _id: String(row.id),
    id: String(row.id),
    name: row.name,
    description: row.description,
    price,
    image: normalizeMediaPath(row.image),
    category: row.category,
    featured: Boolean(row.featured),
    promoActive,
    promoLabel: row.promo_label || "",
    promoPrice,
    effectivePrice: promoActive && promoPrice != null ? promoPrice : price,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
};

export const mapGalleryItem = (row) => ({
  _id: String(row.id),
  id: String(row.id),
  title: row.title,
  type: row.type,
  url: normalizeMediaPath(row.url),
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

export const getUserById = async (id) => {
  const [rows] = await getDb().query("SELECT * FROM users WHERE id = ? LIMIT 1", [id]);
  return rows[0] || null;
};

export const getUserByEmail = async (email) => {
  const [rows] = await getDb().query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
  return rows[0] || null;
};

export const countOrdersByUser = async (userId) => {
  const [rows] = await getDb().query("SELECT COUNT(*) AS total FROM orders WHERE user_id = ?", [userId]);
  return Number(rows[0]?.total || 0);
};

export const fetchOrderItemsByOrderIds = async (orderIds) => {
  if (!orderIds.length) return [];
  const [rows] = await getDb().query(
    `SELECT id, order_id, product_id, name, price, quantity, image
     FROM order_items
     WHERE order_id IN (${orderIds.map(() => "?").join(",")})
     ORDER BY id ASC`,
    orderIds
  );
  return rows;
};

export const mapOrder = (row, items = []) => ({
  _id: String(row.id),
  id: String(row.id),
  user: row.user_id
    ? {
        _id: String(row.user_id),
        id: String(row.user_id),
        name: row.user_name,
        email: row.user_email,
        points: Number(row.user_points || 0)
      }
    : undefined,
  items: items.map((item) => ({
    _id: String(item.id),
    id: String(item.id),
    product: String(item.product_id),
    name: item.name,
    price: Number(item.price),
    quantity: Number(item.quantity),
    image: normalizeMediaPath(item.image)
  })),
  total: Number(row.total),
  firstName: row.first_name || "",
  lastName: row.last_name || "",
  phone: row.phone || "",
  fulfillmentType: row.fulfillment_type || "delivery",
  status: row.status,
  pointsEarned: Number(row.points_earned),
  pointsRedeemed: Number(row.points_redeemed),
  deliveryAddress: row.delivery_address,
  notes: row.notes || "",
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

export const fetchOrders = async ({ userId = null, includeUser = false } = {}) => {
  const db = getDb();
  const whereClause = userId ? "WHERE o.user_id = ?" : "";
  const [rows] = await db.query(
    `
      SELECT
        o.*,
        ${includeUser ? "u.name AS user_name, u.email AS user_email, u.points AS user_points," : ""}
        u.id AS user_id
      FROM orders o
      LEFT JOIN users u ON u.id = o.user_id
      ${whereClause}
      ORDER BY o.created_at DESC
    `,
    userId ? [userId] : []
  );

  const items = await fetchOrderItemsByOrderIds(rows.map((row) => row.id));
  return rows.map((row) => mapOrder(row, items.filter((item) => item.order_id === row.id)));
};
