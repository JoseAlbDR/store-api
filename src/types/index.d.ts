import { IProductQuery } from "./interfaces";

export {};

declare global {
  namespace Express {
    interface Request {
      productQuery: IProductQuery;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
    }
  }
}
