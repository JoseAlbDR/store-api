/* eslint-disable @typescript-eslint/require-await */
import { Request, Response } from "express";
import { Product } from "../models/product";
import { IProduct, IProductQuery } from "../types/interfaces";
import { validateProductQuery } from "../utils/validation";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  const products: IProduct[] = await Product.find();
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (
  req: Request<unknown, unknown, unknown, IProductQuery>,
  res: Response
) => {
  const { query } = req;
  const valid = validateProductQuery(query);

  if (valid.error) {
    const messages = valid.error.details.map(
      (detail): string => detail.message
    );
    return res
      .status(400)
      .json({ success: false, message: messages.join(", ") });
  }

  const products = await Product.find(valid.value);
  return res.status(200).json({ nbHits: products.length, products });
};

export default { getAllProductsStatic, getAllProducts };
