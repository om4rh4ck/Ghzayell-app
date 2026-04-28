import jwt from "jsonwebtoken";

export const generateToken = (user) =>
  jwt.sign(
    {
      userId: user.id || user._id,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );
