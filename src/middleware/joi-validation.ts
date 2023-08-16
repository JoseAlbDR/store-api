import { NextFunction, Request, Response } from "express";
import { validateProductQuery } from "../utils/validation";

const validateQuery = (req: Request, res: Response, next: NextFunction) => {
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
  req.productQuery = valid.value;
  return next();
};

export default validateQuery;
