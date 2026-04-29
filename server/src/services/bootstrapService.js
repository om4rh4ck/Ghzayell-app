import bcrypt from "bcryptjs";
import { getDb } from "../config/db.js";
import { localMenuCategories } from "../../../client/src/data/localMenu.js";

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

const parseLocalPrice = (priceLabel) => {
  const numericValue = Number(String(priceLabel || "").replace(",", ".").replace(/[^\d.]/g, ""));
  return Number.isFinite(numericValue) ? numericValue : 0;
};

const buildOnlinePrice = (priceLabel) => Number((parseLocalPrice(priceLabel) + 1).toFixed(2));

const buildMenuSeedItems = () =>
  localMenuCategories.flatMap((category) =>
    (category.items || []).map((item) => ({
      name: item.name,
      description: item.description || "Produit ajoute depuis le menu local.",
      category: category.title,
      price: buildOnlinePrice(item.price)
    }))
  );

const buildProductKey = (name, category) => `${String(name || "").trim().toLowerCase()}::${String(category || "").trim().toLowerCase()}`;

export const ensureOnlineProductsFromLocalMenu = async () => {
  const db = getDb();
  const seedItems = buildMenuSeedItems();

  if (!seedItems.length) {
    return;
  }

  const [existingRows] = await db.query("SELECT name, category FROM products");
  const existingKeys = new Set(existingRows.map((row) => buildProductKey(row.name, row.category)));

  const itemsToInsert = seedItems.filter((item) => !existingKeys.has(buildProductKey(item.name, item.category)));

  if (!itemsToInsert.length) {
    return;
  }

  await Promise.all(
    itemsToInsert.map((item) =>
      db.query(
        `
          INSERT INTO products
            (name, description, price, image, category, featured, promo_active, promo_label, promo_price)
          VALUES (?, ?, ?, ?, ?, 0, 0, '', NULL)
        `,
        [item.name, item.description, item.price, "", item.category]
      )
    )
  );

  console.log(`Online menu synced from local menu: ${itemsToInsert.length} products added.`);
};
