import { prisma } from "../common/prisma/conntect.prisma.js";

const orderService = {
    async create(req) {
        const { user_id, food_id, amount, code, arr_sub_id } = req.body;

        return prisma.order.create({
            data: {
                user_id,
                food_id,
                amount,
                code,
                arr_sub_id
            }
        });
    },

    async getByUser(req) {
        return prisma.order.findMany({
            where: { user_id: +req.params.userId },
            include: { food: true }
        });
    }
};

export default orderService;
