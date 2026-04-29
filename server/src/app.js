import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import loyaltyRoutes from "./routes/loyaltyRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.join(__dirname, "../../client/dist");
const uploadsPath = path.join(__dirname, "../public/uploads");
const legacyUploadsPath = path.join(__dirname, "public/uploads");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/uploads", express.static(uploadsPath));
app.use("/uploads", express.static(legacyUploadsPath));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/loyalty", loyaltyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get(/^\/(?!api|uploads).*/, (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.use(notFound);
app.use(errorHandler);

export default app;
