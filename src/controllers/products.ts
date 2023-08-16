/* eslint-disable @typescript-eslint/require-await */
import { Request, Response } from "express";
import { Product } from "../models/product";
import { IProduct } from "../types/interfaces";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  const products: IProduct[] = await Product.find();
  res.status(200).json({ nbHits: products.length, products });
};
const getAllProducts = async (_req: Request, res: Response) => {
  res.status(200).json({ msg: "Products route" });
};

export default { getAllProductsStatic, getAllProducts };
