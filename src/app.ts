import express from "express";
import dbConnect from "./db/connect";
import "express-async-errors";
import notFoundMiddleware from "./middleware/not-found";
import errorMiddleware from "./middleware/error-handler";
import productsRouter from "./routes/products";
import validateQuery from "./middleware/joi-validation";
import cors from "cors";

const app = express();
const port = +process.env.PORT || 3000;
app.use(
  cors({
    origin: ["https://storefront.jadero.dev", "http://localhost:5173"],
  })
);

// routes
app.get("/", (_req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});
app.use("/api/v1/products", validateQuery, productsRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await dbConnect();
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

void start();
