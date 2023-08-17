/* eslint-disable @typescript-eslint/require-await */
import { Request, Response } from "express";
import { Product } from "../models/product";
import { IProduct } from "../types/interfaces";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  const search = "y";
  const products: IProduct[] = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req: Request, res: Response) => {
  if (req.productQuery.name && typeof req.productQuery.name === "string") {
    req.productQuery.name = {
      $regex: req.productQuery.name,
      $options: "i",
    };
  }

  const products = await Product.find(req.productQuery);
  return res.status(200).json({ nbHits: products.length, products });
};

export default { getAllProductsStatic, getAllProducts };
