import bcrypt from "bcryptjs";
import { getDb } from "../config/db.js";
import { countOrdersByUser, getUserByEmail, mapUser } from "../services/mysqlService.js";
import { generateToken } from "../utils/generateToken.js";

const buildAuthResponse = async (userRow) => {
  const user = mapUser(userRow);
  const ordersCount = await countOrdersByUser(user.id);

  return {
    token: generateToken(user),
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      points: user.points,
      ordersCount
    }
  };
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const [result] = await getDb().query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
    name,
    email.toLowerCase(),
    hashedPassword
  ]);

  const userRow = await getUserByEmail(email.toLowerCase());
  return res.status(201).json(await buildAuthResponse(userRow || { id: result.insertId, name, email, role: "user", points: 0 }));
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const userRow = await getUserByEmail(email.toLowerCase());

  if (!userRow || !(await bcrypt.compare(password, userRow.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.json(await buildAuthResponse(userRow));
};

export const getProfile = async (req, res) => {
  const ordersCount = await countOrdersByUser(req.user.id);

  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
    points: req.user.points,
    ordersCount
  });
};
