/* eslint-disable @typescript-eslint/require-await */
import { Request, Response } from "express";

const getAllProductsStatic = async (_req: Request, res: Response) => {
  res.status(200).json({ msg: "Products testing route" });
};
const getAllProducts = async (_req: Request, res: Response) => {
  res.status(200).json({ msg: "Products route" });
};

export default { getAllProductsStatic, getAllProducts };
