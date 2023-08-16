export type ICompany = "marcos" | "liddy" | "ikea" | "caressa";

export interface IProduct {
  rating: number;
  createdAt: Date;
  name: string;
  price: number;
  company: ICompany;
  featured: boolean;
}
