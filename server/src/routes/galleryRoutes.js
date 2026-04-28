import express from "express";
import { body } from "express-validator";
import {
  createGalleryItem,
  deleteGalleryItem,
  getGalleryItems
} from "../controllers/galleryController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(getGalleryItems));
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("media"),
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("type").isIn(["image", "video"]).withMessage("Type must be image or video"),
    validateRequest
  ],
  asyncHandler(createGalleryItem)
);
router.delete("/:id", protect, adminOnly, asyncHandler(deleteGalleryItem));

export default router;
