import { getDb } from "../config/db.js";
import { mapGalleryItem } from "../services/mysqlService.js";

export const getGalleryItems = async (req, res) => {
  const [rows] = await getDb().query("SELECT * FROM gallery ORDER BY created_at DESC");
  res.json(rows.map(mapGalleryItem));
};

export const createGalleryItem = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Media obligatoire: veuillez uploader un fichier." });
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  const [result] = await getDb().query("INSERT INTO gallery (title, type, url) VALUES (?, ?, ?)", [
    req.body.title,
    req.body.type,
    fileUrl
  ]);

  const [rows] = await getDb().query("SELECT * FROM gallery WHERE id = ? LIMIT 1", [result.insertId]);
  res.status(201).json(mapGalleryItem(rows[0]));
};

export const deleteGalleryItem = async (req, res) => {
  const [result] = await getDb().query("DELETE FROM gallery WHERE id = ?", [req.params.id]);

  if (!result.affectedRows) {
    return res.status(404).json({ message: "Gallery item not found" });
  }

  return res.json({ message: "Gallery item deleted" });
};
