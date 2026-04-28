import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    image: {
      type: String,
      default: ""
    }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: {
      type: [orderItemSchema],
      required: true
    },
    total: {
      type: Number,
      required: true,
      min: 0
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "preparing", "delivered", "cancelled"],
      default: "pending"
    },
    pointsEarned: {
      type: Number,
      default: 0
    },
    pointsRedeemed: {
      type: Number,
      default: 0
    },
    deliveryAddress: {
      type: String,
      required: true,
      trim: true
    },
    notes: {
      type: String,
      default: "",
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
