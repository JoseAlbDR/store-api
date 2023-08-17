/* eslint-disable @typescript-eslint/require-await */
import { Request, Response } from "express";
import { Product } from "../models/product";
import { IProductQuery } from "../types/interfaces";
// import { IProduct } from "../types/interfaces";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  const result = Product.find({}).sort("name");
  console.log(result);
  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req: Request, res: Response) => {
  const queryObject: IProductQuery = {};

  if (req.productQuery.name && typeof req.productQuery.name === "string") {
    req.productQuery.name = {
      $regex: req.productQuery.name,
      $options: "i",
    };
    queryObject.name = req.productQuery.name;
  }

  if (
    req.productQuery.featured &&
    typeof req.productQuery.featured === "boolean"
  ) {
    queryObject.featured = req.productQuery.featured;
  }

  let result = Product.find(queryObject);

  if (req.productQuery.sort && typeof req.productQuery.sort === "string") {
    const { sort } = req.productQuery;
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  const products = await result;

  return res.status(200).json({ nbHits: products.length, products });
};

export default { getAllProductsStatic, getAllProducts };
