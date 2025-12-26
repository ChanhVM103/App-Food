import express from "express";
import rateController from "../controllers/rate.controller.js";

const rateRouter = express.Router();

rateRouter.post("/", rateController.rate);
rateRouter.get("/user/:userId", rateController.getByUser);
rateRouter.get("/restaurant/:resId", rateController.getByRestaurant);

export default rateRouter;
