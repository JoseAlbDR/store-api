export type ICompany = "marcos" | "liddy" | "ikea" | "caressa" | "all" | "";

export interface IProduct {
  rating?: number;
  createdAt?: Date;
  name: string;
  price: number;
  company: ICompany;
  featured?: boolean;
}

export type ProductName = {
  // name?: string | { $regex: string; $options: string };
  $regex: string;
  $options: string;
};

export interface IProductQuery {
  rating?: number;
  createdAt?: Date;
  name?: string | ProductName;
  price?: number;
  company?: ICompany;
  featured?: boolean;
  sort?: string;
  fields?: string;
  page?: number;
  limit?: number;
  [key: string]:
    | number
    | string
    | Date
    | ProductName
    | boolean
    | undefined
    | { [key: string]: number };
}

export type NoDateIProduct = Omit<IProduct, "createdAt">;
