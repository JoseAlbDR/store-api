import { Request, Response } from "express";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  await new Promise((_resolve) => {});
  res.status(200).json({ msg: "Products testing route" });
};
const getAllProducts = async (_req: Request, res: Response) => {
  await new Promise((_resolve) => {});
  res.status(200).json({ msg: "Products route" });
};

export default { getAllProductsStatic, getAllProducts };
