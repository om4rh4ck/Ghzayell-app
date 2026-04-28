import express from "express";
import { body } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProductCategories,
  getProducts,
  updateProduct
} from "../controllers/productController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(getProducts));
router.get("/categories", asyncHandler(getProductCategories));

router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
    body("category").notEmpty().withMessage("Category is required"),
    validateRequest
  ],
  asyncHandler(createProduct)
);

router.put("/:id", protect, adminOnly, upload.single("image"), asyncHandler(updateProduct));
router.delete("/:id", protect, adminOnly, asyncHandler(deleteProduct));

export default router;
