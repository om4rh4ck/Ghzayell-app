import dotenv from "dotenv";
import app from "./app.js";
import { connectDb } from "./config/db.js";
import { ensureDefaultAdmin } from "./services/bootstrapService.js";
import { fileURLToPath } from "url";

dotenv.config();

const port = process.env.PORT || 5000;

export const startServer = async () => {
  await connectDb();
  await ensureDefaultAdmin();
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  return server;
};

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectRun) {
  startServer().catch((error) => {
    console.error("Server failed to start", error);
    process.exit(1);
  });
}
