import jwt from "jsonwebtoken";
import { getUserById, mapUser } from "../services/mysqlService.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userRow = await getUserById(decoded.userId);

    if (!userRow) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = mapUser(userRow);
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }

  return next();
};
