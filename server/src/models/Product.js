import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    image: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    promoActive: {
      type: Boolean,
      default: false
    },
    promoLabel: {
      type: String,
      trim: true,
      default: ""
    },
    promoPrice: {
      type: Number,
      min: 0,
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
