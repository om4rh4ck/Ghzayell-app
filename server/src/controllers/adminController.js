import { getDb } from "../config/db.js";
import { mapUser } from "../services/mysqlService.js";

export const getAdminStats = async (req, res) => {
  const db = getDb();
  const [[usersRow]] = await db.query("SELECT COUNT(*) AS total FROM users");
  const [[ordersRow]] = await db.query("SELECT COUNT(*) AS total FROM orders");
  const [[productsRow]] = await db.query("SELECT COUNT(*) AS total FROM products");
  const [[galleryRow]] = await db.query("SELECT COUNT(*) AS total FROM gallery");
  const [[contactsRow]] = await db.query("SELECT COUNT(*) AS total FROM contact_messages");
  const [[revenueRow]] = await db.query("SELECT COALESCE(SUM(total), 0) AS totalRevenue FROM orders");
  const [[pointsRow]] = await db.query("SELECT COALESCE(SUM(points), 0) AS totalPoints FROM users");

  res.json({
    users: Number(usersRow.total),
    orders: Number(ordersRow.total),
    products: Number(productsRow.total),
    galleryItems: Number(galleryRow.total),
    contacts: Number(contactsRow.total),
    revenue: Number(revenueRow.totalRevenue),
    totalPoints: Number(pointsRow.totalPoints)
  });
};

export const getUsers = async (req, res) => {
  const [rows] = await getDb().query("SELECT * FROM users ORDER BY created_at DESC");
  res.json(rows.map(mapUser));
};

export const addUserPoints = async (req, res) => {
  const points = Number(req.body.points || 0);
  const [result] = await getDb().query("UPDATE users SET points = points + ? WHERE id = ?", [points, req.params.id]);

  if (!result.affectedRows) {
    return res.status(404).json({ message: "User not found" });
  }

  const [rows] = await getDb().query("SELECT * FROM users WHERE id = ? LIMIT 1", [req.params.id]);
  res.json(mapUser(rows[0]));
};

export const getContactMessages = async (req, res) => {
  const [rows] = await getDb().query("SELECT * FROM contact_messages ORDER BY created_at DESC");
  res.json(rows);
};
