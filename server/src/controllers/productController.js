import { getDb } from "../config/db.js";
import { mapProduct } from "../services/mysqlService.js";

const parseProductPayload = (req, current = {}) => ({
  name: req.body.name ?? current.name,
  description: req.body.description ?? current.description,
  price: req.body.price == null ? current.price : Number(req.body.price),
  image: req.file ? `/uploads/${req.file.filename}` : current.image ?? "",
  category: req.body.category ?? current.category,
  featured:
    req.body.featured == null ? Boolean(current.featured) : req.body.featured === "true" || req.body.featured === true,
  promoActive:
    req.body.promoActive == null
      ? Boolean(current.promo_active ?? current.promoActive)
      : req.body.promoActive === "true" || req.body.promoActive === true,
  promoLabel: req.body.promoLabel ?? current.promo_label ?? current.promoLabel ?? "",
  promoPrice:
    req.body.promoPrice == null
      ? current.promo_price ?? current.promoPrice ?? null
      : req.body.promoPrice === ""
        ? null
        : Number(req.body.promoPrice)
});

export const getProducts = async (req, res) => {
  const { category } = req.query;
  const whereClause = category && category !== "All" ? "WHERE category = ?" : "";
  const [rows] = await getDb().query(`SELECT * FROM products ${whereClause} ORDER BY created_at DESC`, whereClause ? [category] : []);
  res.json(rows.map(mapProduct));
};

export const getProductCategories = async (req, res) => {
  const [rows] = await getDb().query("SELECT DISTINCT category FROM products ORDER BY category ASC");
  res.json(["All", ...rows.map((row) => row.category)]);
};

export const createProduct = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image obligatoire: veuillez uploader une image." });
  }

  const payload = parseProductPayload(req);
  const [result] = await getDb().query(
    `
      INSERT INTO products
        (name, description, price, image, category, featured, promo_active, promo_label, promo_price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      payload.name,
      payload.description,
      payload.price,
      payload.image,
      payload.category,
      payload.featured ? 1 : 0,
      payload.promoActive ? 1 : 0,
      payload.promoLabel,
      payload.promoPrice
    ]
  );

  const [rows] = await getDb().query("SELECT * FROM products WHERE id = ? LIMIT 1", [result.insertId]);
  res.status(201).json(mapProduct(rows[0]));
};

export const updateProduct = async (req, res) => {
  const [rows] = await getDb().query("SELECT * FROM products WHERE id = ? LIMIT 1", [req.params.id]);
  const current = rows[0];

  if (!current) {
    return res.status(404).json({ message: "Product not found" });
  }

  const payload = parseProductPayload(req, current);

  await getDb().query(
    `
      UPDATE products
      SET name = ?, description = ?, price = ?, image = ?, category = ?, featured = ?, promo_active = ?, promo_label = ?, promo_price = ?
      WHERE id = ?
    `,
    [
      payload.name,
      payload.description,
      payload.price,
      payload.image,
      payload.category,
      payload.featured ? 1 : 0,
      payload.promoActive ? 1 : 0,
      payload.promoLabel,
      payload.promoPrice,
      req.params.id
    ]
  );

  const [updatedRows] = await getDb().query("SELECT * FROM products WHERE id = ? LIMIT 1", [req.params.id]);
  return res.json(mapProduct(updatedRows[0]));
};

export const deleteProduct = async (req, res) => {
  const [result] = await getDb().query("DELETE FROM products WHERE id = ?", [req.params.id]);

  if (!result.affectedRows) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json({ message: "Product deleted" });
};
