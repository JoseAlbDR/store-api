export type Company = "marcos" | "liddy" | "ikea" | "caressa";

export interface IProduct {
  rating: number;
  createdAt: Date;
  name: string;
  price: number;
  company: Company;
  featured: boolean;
}
