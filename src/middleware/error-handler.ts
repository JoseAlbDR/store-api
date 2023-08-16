import { NextFunction, Request, Response } from "express";

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again", err });
};

export default errorHandlerMiddleware;
