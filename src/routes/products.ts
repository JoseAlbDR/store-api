/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import produtsController from "../controllers/products";

const router = express.Router();

router.route("/").get(produtsController.getAllProducts);
router.route("/static").get(produtsController.getAllProductsStatic);

export default router;
