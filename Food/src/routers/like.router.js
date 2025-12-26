import express from "express";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.post("/", likeController.like);
likeRouter.delete("/", likeController.unlike);
likeRouter.get("/user/:userId", likeController.getByUser);
likeRouter.get("/restaurant/:resId", likeController.getByRestaurant);

export default likeRouter;
