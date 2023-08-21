import { Request, Response } from "express";
import { Product } from "../models/product";
import { IProductQuery } from "../types/interfaces";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  const result = Product.find({ price: { $gt: 30 } }).sort("price");
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
    req.productQuery.numericFilters &&
    typeof req.productQuery.numericFilters === "string"
  ) {
    const numericFilters: string = req.productQuery.numericFilters;
    const operatorMap: { [key: string]: string } = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|<=|>=|=)\b/g;

    const filters: string | string[] = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];
    filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: +value };
      }
    });
  }

  // console.log(queryObject);

  if (typeof req.productQuery.featured === "boolean") {
    queryObject.featured = req.productQuery.featured;
  }

  if (
    req.productQuery.company &&
    typeof req.productQuery.company === "string" &&
    req.productQuery.company !== "all"
  ) {
    queryObject.company = req.productQuery.company;
  }

  let result = Product.find(queryObject);

  if (req.productQuery.sort && typeof req.productQuery.sort === "string") {
    const { sort } = req.productQuery;
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("name");
  }

  if (req.productQuery.fields && typeof req.productQuery.fields === "string") {
    const fieldsList = req.productQuery.fields.split(",").join(" ");
    result = result.select(fieldsList)!;
  }
  // console.log(result);

  if (req.productQuery.page && req.productQuery.limit) {
    const page = req.productQuery.page;
    const limit = req.productQuery.limit;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
  }

  const products = await result;

  return res.status(200).json({ nbHits: products.length, products });
};

export default { getAllProductsStatic, getAllProducts };
