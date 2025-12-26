import likeService from "../services/like.service.js";
import { responseSuccess } from "../common/helpers/function.helper.js";

const likeController = {
    async like(req, res) {
        const result = await likeService.like(req);
        res.json(responseSuccess(result, "Like success"));
    },

    async unlike(req, res) {
        const result = await likeService.unlike(req);
        res.json(responseSuccess(result, "Unlike success"));
    },

    async getByUser(req, res) {
        const result = await likeService.getByUser(req);
        res.json(responseSuccess(result));
    },

    async getByRestaurant(req, res) {
        const result = await likeService.getByRestaurant(req);
        res.json(responseSuccess(result));
    }
};

export default likeController;
