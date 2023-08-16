import Joi from "joi";
import { IProduct, IProductQuery } from "../types/interfaces";

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

export const validateProductQuery = (query: unknown) => {
  const querySchema = Joi.object<IProductQuery>({
    name: Joi.string().label("Name"),
    price: Joi.number().min(0).label("Price"),
    featured: Joi.boolean().label("Featured"),
    rating: Joi.number().min(0).max(10).label("Rating"),
    createdAt: Joi.date().label("Date"),
    company: Joi.string()
      // .valid("ikea", "liddy", "caressa", "marcos")
      .label("Company"),
  });

  return querySchema.validate(query, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
    },
  });
};
