export type ICompany = "marcos" | "liddy" | "ikea" | "caressa";

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
}

export type NoDateIProduct = Omit<IProduct, "createdAt">;
