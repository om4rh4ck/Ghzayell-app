import mysql from "mysql2/promise";

let pool;

const requiredEnv = ["DB_HOST", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASSWORD"];

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
      points INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      image TEXT DEFAULT '',
      category VARCHAR(255) NOT NULL,
      featured TINYINT(1) NOT NULL DEFAULT 0,
      promo_active TINYINT(1) NOT NULL DEFAULT 0,
      promo_label VARCHAR(255) DEFAULT '',
      promo_price DECIMAL(10, 2) DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        first_name VARCHAR(255) NOT NULL DEFAULT '',
        last_name VARCHAR(255) NOT NULL DEFAULT '',
        phone VARCHAR(50) NOT NULL DEFAULT '',
        fulfillment_type ENUM('delivery', 'pickup') NOT NULL DEFAULT 'delivery',
        total DECIMAL(10, 2) NOT NULL,
        status ENUM('pending', 'confirmed', 'preparing', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
        points_earned INT NOT NULL DEFAULT 0,
        points_redeemed INT NOT NULL DEFAULT 0,
        delivery_address TEXT NOT NULL,
      notes TEXT DEFAULT '',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      CONSTRAINT fk_orders_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  await pool.query("ALTER TABLE orders ADD COLUMN IF NOT EXISTS first_name VARCHAR(255) NOT NULL DEFAULT ''");
  await pool.query("ALTER TABLE orders ADD COLUMN IF NOT EXISTS last_name VARCHAR(255) NOT NULL DEFAULT ''");
  await pool.query("ALTER TABLE orders ADD COLUMN IF NOT EXISTS phone VARCHAR(50) NOT NULL DEFAULT ''");
  await pool.query(
    "ALTER TABLE orders ADD COLUMN IF NOT EXISTS fulfillment_type ENUM('delivery', 'pickup') NOT NULL DEFAULT 'delivery'"
  );

  await pool.query(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      product_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      quantity INT NOT NULL,
      image TEXT DEFAULT '',
      CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS gallery (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      type ENUM('image', 'video') NOT NULL,
      url TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
};

export const connectDb = async () => {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing MySQL env vars: ${missing.join(", ")}`);
  }

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
    queueLimit: 0,
    decimalNumbers: true
  });

  await pool.query("SELECT 1");
  await createTables();
  console.log("MySQL connected");
};

export const getDb = () => {
  if (!pool) {
    throw new Error("MySQL pool is not initialized");
  }

  return pool;
};

export const closeDb = async () => {
  if (pool) {
    await pool.end();
    pool = null;
  }
};
