import express from "express";
import { addUserPoints, getAdminStats, getContactMessages, getUsers } from "../controllers/adminController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, asyncHandler(getAdminStats));
router.get("/users", protect, adminOnly, asyncHandler(getUsers));
router.get("/contacts", protect, adminOnly, asyncHandler(getContactMessages));
router.patch("/users/:id/points", protect, adminOnly, asyncHandler(addUserPoints));

export default router;
