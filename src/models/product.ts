import mongoose from "mongoose";
import { IProduct } from "../types/interfaces";

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  price: {
    type: Number,
    min: [0, "Price cannot bet less than 0"],
    required: [true, "Product price is required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: [0, "Rating cannot bet less than 0"],
    max: [10, "Rating cannot bet greater than 10"],
    default: 4.5,
  },
  company: {
    type: String,
    // enum: ["ikea", "liddy", "caressa", "marcos"],
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
