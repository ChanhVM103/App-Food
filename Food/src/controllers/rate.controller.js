import rateService from "../services/rate.service.js";
import { responseSuccess } from "../common/helpers/function.helper.js";

const rateController = {
    async rate(req, res) {
        const result = await rateService.rate(req);
        res.json(responseSuccess(result, "Rate success"));
    },

    async getByUser(req, res) {
        const result = await rateService.getByUser(req);
        res.json(responseSuccess(result));
    },

    async getByRestaurant(req, res) {
        const result = await rateService.getByRestaurant(req);
        res.json(responseSuccess(result));
    }
};

export default rateController;
