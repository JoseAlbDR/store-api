import dbConnect from "./src/db/connect";
import { Product } from "./src/models/product";
import { data as products } from "./products";

const start = async () => {
  try {
    await dbConnect();
    await Product.deleteMany();
    await Product.create(products);
    console.log("Success!!!");
  } catch (error) {
    console.log(error);
  }
};

void start();
