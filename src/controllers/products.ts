/* eslint-disable @typescript-eslint/require-await */
import { Request, Response } from "express";
import { Product } from "../models/product";
import { IProduct } from "../types/interfaces";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  const products: IProduct[] = await Product.find();
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find(req.productQuery);
  return res.status(200).json({ nbHits: products.length, products });
};

export default { getAllProductsStatic, getAllProducts };
