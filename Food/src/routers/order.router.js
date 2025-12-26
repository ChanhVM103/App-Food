import express from "express";
import orderController from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", orderController.create);
orderRouter.get("/user/:userId", orderController.getByUser);

export default orderRouter;
