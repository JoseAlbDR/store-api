import Joi from "joi";
import { IProduct } from "../types/interfaces";

// export const validateCompany = (company: unknown) => {
//   const companySchema = Joi.string<ICompany>().valid(
//     "ikea",
//     "liddy",
//     "caressa",
//     "marcos"
//   );
// };

export const validateProductData = (product: unknown) => {
  const productSchema = Joi.object<IProduct>({
    name: Joi.string().required().label("Name"),
    price: Joi.number().min(0).required().label("Price"),
    featured: Joi.boolean().required().label("Featured"),
    rating: Joi.number().min(0).max(10).default(4.5).label("Rating"),
    createdAt: Joi.date().default(Date.now).label("Date"),
    company: Joi.string()
      .valid("ikea", "liddy", "caressa", "marcos")
      .required()
      .label("Company"),
  });

  return productSchema.validate(product, {
    errors: { wrap: { label: false } },
  });
};
