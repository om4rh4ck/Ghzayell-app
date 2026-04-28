import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum: ["image", "video"],
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
