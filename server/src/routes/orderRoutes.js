import express from "express";
import { body } from "express-validator";
import {
  createOrder,
  getAllOrders,
  getMyOrders,
  updateOrderStatus
} from "../controllers/orderController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.post(
  "/",
  protect,
  [
    body("items").isArray({ min: 1 }).withMessage("At least one item is required"),
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    body("fulfillmentType").optional().isIn(["delivery", "pickup"]).withMessage("Invalid fulfillment type"),
    body("deliveryAddress").custom((value, { req }) => {
      if ((req.body.fulfillmentType || "delivery") === "delivery" && !String(value || "").trim()) {
        throw new Error("Delivery address is required");
      }
      return true;
    }),
    validateRequest
  ],
  asyncHandler(createOrder)
);

router.get("/mine", protect, asyncHandler(getMyOrders));
router.get("/", protect, adminOnly, asyncHandler(getAllOrders));
router.patch(
  "/:id/status",
  protect,
  adminOnly,
  [body("status").isIn(["pending", "confirmed", "preparing", "delivered", "cancelled"]), validateRequest],
  asyncHandler(updateOrderStatus)
);

export default router;
