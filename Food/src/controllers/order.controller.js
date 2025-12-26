import orderService from "../services/order.service.js";
import { responseSuccess } from "../common/helpers/function.helper.js";

const orderController = {
    async create(req, res) {
        const result = await orderService.create(req);
        res.json(responseSuccess(result, "Order success"));
    },

    async getByUser(req, res) {
        const result = await orderService.getByUser(req);
        res.json(responseSuccess(result));
    }
};

export default orderController;
