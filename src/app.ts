import express from "express";
import dbConnect from "./db/connect";
import notFoundMiddleware from "./middleware/not-found";
import errorMiddleware from "./middleware/error-handler";
const app = express();
const port = +process.env.PORT || 3000;

app.use(errorMiddleware);

app.get("/", (_req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});
app.use("*", notFoundMiddleware);

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
