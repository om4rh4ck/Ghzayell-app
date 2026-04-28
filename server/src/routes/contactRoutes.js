import express from "express";
import { body } from "express-validator";
import { createContactMessage } from "../controllers/contactController.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.post(
  "/",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    body("message").notEmpty().withMessage("Message is required"),
    validateRequest
  ],
  asyncHandler(createContactMessage)
);

export default router;
