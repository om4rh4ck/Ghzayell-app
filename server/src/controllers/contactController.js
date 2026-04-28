import { getDb } from "../config/db.js";

export const createContactMessage = async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  const [result] = await getDb().query(
    `
      INSERT INTO contact_messages (full_name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `,
    [fullName, email.toLowerCase(), phone, message]
  );

  const [rows] = await getDb().query("SELECT * FROM contact_messages WHERE id = ? LIMIT 1", [result.insertId]);
  res.status(201).json(rows[0]);
};
