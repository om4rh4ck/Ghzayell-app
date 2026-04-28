# Ghzaiel Food

Ghzaiel Food is a full-stack restaurant web app with a customer-facing storefront, loyalty points, online ordering, and an admin dashboard for menu, gallery, users, and order management.

## Stack

- Backend: Node.js, Express, MySQL, mysql2, JWT, Multer
- Frontend: React, Vite, React Router
- Styling: Custom CSS with a mobile-first food delivery inspired design

## Features

- Customer authentication with JWT
- Menu browsing by category
- Cart and online ordering
- Order history
- Loyalty points earn and redeem flow
- Media gallery for images and videos
- Admin dashboard with stats
- Menu, user, order, and gallery management

## Project Structure

```text
ghzaiel app/
  client/   React frontend
  server/   Express API
```

## Setup

### 1. Install dependencies

```bash
npm run install:all
```

Or install each side separately:

```bash
cd server && npm install
cd ../client && npm install
```

### 2. Configure environment variables

Copy the example files and update values:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

### 3. Start MySQL

Make sure a MySQL instance is running locally or update the database values in `server/.env`.

Example values for Hostinger:

```bash
DB_HOST=your-hostinger-mysql-host
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

### 4. Seed the database

```bash
npm run seed
```

This creates:

- Admin user: `admin@ghzaielfood.com` / `Admin123!`
- Demo customer: `user@ghzaielfood.com` / `User123!`
- Sample menu items and promo prices
- Sample gallery entries
- Sample order history

### 5. Run the app

```bash
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## API Notes

- Auth endpoints live under `/api/auth`
- Menu endpoints live under `/api/products`
- Orders endpoints live under `/api/orders`
- Loyalty endpoints live under `/api/loyalty`
- Gallery endpoints live under `/api/gallery`
- Admin metrics live under `/api/admin/stats`
- Admin can add customer gift points at `/api/admin/users/:id/points`

## Uploads

Multer stores uploaded files in `server/public/uploads`. The backend exposes them at `/uploads/...`.

## Production Notes

- Set a strong `JWT_SECRET`
- Use your Hostinger MySQL credentials in production
- Add a real payment provider if needed
- Serve the frontend build through Nginx or the Express server
- Add object storage for media in production
- Add rate limiting and audit logs for admin routes
