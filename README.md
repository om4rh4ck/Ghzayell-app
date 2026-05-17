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
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-professional-email@your-domain.com
SMTP_PASS=your-email-password-or-app-password
MAIL_FROM="Ghzaiel Food <your-professional-email@your-domain.com>"
ORDER_NOTIFICATION_EMAIL=your-professional-email@your-domain.com
```

### 4. Seed the database

```bash
npm run seed
```

This creates:

- Admin user: `admin@ghzaielfastfood.com` / `Admin123!`
- Demo customer: `user@ghzaielfastfood.com` / `User123!`
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

## Deploy on Hostinger

This project is now ready to run with one Node.js app in production:

- the React frontend is built in `client/dist`
- the Express server can serve that built frontend automatically
- the API stays available under `/api`

### Recommended Hostinger setup

1. Push the repository to GitHub
2. Create a MySQL database in Hostinger
3. Create a Node.js app in Hostinger or deploy on a Hostinger VPS
4. Connect the app to this GitHub repository
5. Use the repository root as the application root
6. Use these commands:

Build command:

```bash
npm install
npm run hostinger:build
```

Start command:

```bash
npm start
```

### Required environment variables on Hostinger

```bash
PORT=5000
JWT_SECRET=replace-with-a-strong-secret
CLIENT_URL=https://your-domain.com
DB_HOST=your-hostinger-mysql-host
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_CONNECTION_LIMIT=10
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-professional-email@your-domain.com
SMTP_PASS=your-email-password-or-app-password
MAIL_FROM="Ghzaiel Food <your-professional-email@your-domain.com>"
ORDER_NOTIFICATION_EMAIL=your-professional-email@your-domain.com
```

### Order email notifications

When a customer places an order:

- the customer receives an email summary of the order
- your professional mailbox defined in `ORDER_NOTIFICATION_EMAIL` receives the same order

If SMTP variables are missing, the order is still created and the server simply skips email sending.

### First production setup

After the first deploy, run the seed only if you want demo data:

```bash
npm run seed --prefix server
```

If you do not want demo data in production, skip the seed.
