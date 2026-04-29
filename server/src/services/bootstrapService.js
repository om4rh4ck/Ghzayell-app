import bcrypt from "bcryptjs";
import { getDb } from "../config/db.js";

const defaultAdmin = {
  name: process.env.ADMIN_NAME || "Ghzaiel Admin",
  email: (process.env.ADMIN_EMAIL || "admin@ghzaielfood.com").toLowerCase(),
  password: process.env.ADMIN_PASSWORD || "Admin123!",
  points: Number(process.env.ADMIN_POINTS || 1200)
};

export const ensureDefaultAdmin = async () => {
  const db = getDb();
  const [rows] = await db.query("SELECT id FROM users WHERE role = 'admin' OR email = ? LIMIT 1", [defaultAdmin.email]);

  if (rows.length) {
    return;
  }

  const hashedPassword = await bcrypt.hash(defaultAdmin.password, 10);

  await db.query(
    "INSERT INTO users (name, email, password, role, points) VALUES (?, ?, ?, 'admin', ?)",
    [defaultAdmin.name, defaultAdmin.email, hashedPassword, defaultAdmin.points]
  );

  console.log(`Default admin created: ${defaultAdmin.email}`);
};
