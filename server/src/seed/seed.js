import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { closeDb, connectDb, getDb } from "../config/db.js";

dotenv.config();

export const seed = async () => {
  try {
    await connectDb();
    const db = getDb();

    await db.query("DELETE FROM order_items");
    await db.query("DELETE FROM orders");
    await db.query("DELETE FROM gallery");
    await db.query("DELETE FROM products");
    await db.query("DELETE FROM users");

    const adminPassword = await bcrypt.hash("Admin123!", 10);
    const userPassword = await bcrypt.hash("User123!", 10);

    const [adminResult] = await db.query(
      "INSERT INTO users (name, email, password, role, points) VALUES (?, ?, ?, 'admin', ?)",
      ["Ghzaiel Admin", "admin@ghzaielfood.com", adminPassword, 1200]
    );
    const [customerResult] = await db.query(
      "INSERT INTO users (name, email, password, role, points) VALUES (?, ?, ?, 'user', ?)",
      ["Demo Customer", "user@ghzaielfood.com", userPassword, 420]
    );

    const [productResult] = await db.query(
      `
        INSERT INTO products
          (name, description, price, image, category, featured, promo_active, promo_label, promo_price)
        VALUES
          (?, ?, ?, ?, ?, ?, ?, ?, ?),
          (?, ?, ?, ?, ?, ?, ?, ?, ?),
          (?, ?, ?, ?, ?, ?, ?, ?, ?),
          (?, ?, ?, ?, ?, ?, ?, ?, ?),
          (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        "Brik Classique",
        "Traditional Tunisian brik with egg, tuna, and crispy pastry.",
        7,
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        "BRIKA",
        1,
        1,
        "Promo Local",
        6.5,
        "Brik au Thon",
        "Golden tuna brik with herbs and lemon for a bold coastal taste.",
        9.8,
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        "BRIKA",
        0,
        0,
        "",
        null,
        "Brik Gourmand",
        "Signature brik with cheese, olives, and a generous savory filling.",
        11,
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        "BRIKA",
        1,
        1,
        "Best Seller",
        10,
        "Lablebi Maison",
        "Bol chaud et genereux avec pois chiches et epices tunisiennes.",
        8,
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        "LABLEBI",
        0,
        0,
        "",
        null,
        "Citronnade Maison",
        "Fresh homemade lemonade with mint and citrus zest.",
        3.5,
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
        "HAJA TETCHRAB",
        0,
        0,
        "",
        null
      ]
    );

    const firstProductId = productResult.insertId;
    const productIds = [firstProductId, firstProductId + 1, firstProductId + 2, firstProductId + 3, firstProductId + 4];

    await db.query(
      `
        INSERT INTO gallery (title, type, url)
        VALUES
          (?, 'image', ?),
          (?, 'image', ?),
          (?, 'video', ?)
      `,
      [
        "Signature Brik Hero",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
        "Freshly Prepared Brik",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
        "Kitchen Story",
        "https://www.w3schools.com/html/mov_bbb.mp4"
      ]
    );

    const [orderResult] = await db.query(
      `
        INSERT INTO orders (user_id, total, status, points_earned, points_redeemed, delivery_address, notes)
        VALUES (?, ?, 'delivered', ?, 0, ?, ?)
      `,
      [customerResult.insertId, 17.5, 175, "Rue de Tunis, Sousse", "Call on arrival"]
    );

    await db.query(
      `
        INSERT INTO order_items (order_id, product_id, name, price, quantity, image)
        VALUES
          (?, ?, ?, ?, ?, ?),
          (?, ?, ?, ?, ?, ?)
      `,
      [
        orderResult.insertId,
        productIds[0],
        "Brik Classique",
        6.5,
        2,
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        orderResult.insertId,
        productIds[4],
        "Citronnade Maison",
        3.5,
        1,
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80"
      ]
    );

    console.log("Seed completed successfully");
    console.log(`Admin: admin@ghzaielfood.com / Admin123!`);
    console.log(`User: user@ghzaielfood.com / User123!`);
    console.log(`Admin user id: ${adminResult.insertId}`);
  } catch (error) {
    console.error("Seed failed", error);
  } finally {
    await closeDb();
  }
};

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectRun) {
  seed();
}
