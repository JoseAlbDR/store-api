import Joi from "joi";
import { IProduct, IProductQuery } from "../types/interfaces";

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

const allowedFields = ["name", "price", "featured", "rating", "company"];
const allowedSort = [
  "name",
  "price",
  "featured",
  "rating",
  "company",
  "createdAt",
  "-name",
  "-price",
  "-featured",
  "-rating",
  "-company",
  "-createdAt",
];

const customValidation = (
  value: string,
  helpers: Joi.CustomHelpers<unknown>,
  allowed: string[]
): string | Joi.ErrorReport => {
  console.log(allowed);
  const valuesArray = value.split(",");
  const invalidValues: string[] = valuesArray.filter(
    (field) => !allowed.includes(field)
  );

  if (invalidValues.length === 0) {
    return value;
  } else {
    return helpers.error("any.invalid", { invalidValues });
  }
};

export const validateProductQuery = (query: unknown) => {
  const querySchema = Joi.object<IProductQuery>({
    name: Joi.string().label("Name"),
    price: Joi.number().min(0).label("Price"),
    featured: Joi.boolean().label("Featured"),
    rating: Joi.number().min(0).max(10).label("Rating"),
    createdAt: Joi.date().label("Date"),
    company: Joi.string().label("Company"),
    sort: Joi.string()
      .custom((value: string, helpers) =>
        customValidation(value, helpers, allowedSort)
      )
      .label("SortBy"),
    fields: Joi.string()
      .custom((value: string, helpers) =>
        customValidation(value, helpers, allowedFields)
      )
      .label("Fields"),
    page: Joi.number().min(1).label("Page"),
  });

  return querySchema.validate(query, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
      "any.invalid": "Not Allowed Values: {#invalidValues}.",
    },
  });
};
