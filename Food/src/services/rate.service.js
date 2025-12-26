import { prisma } from "../common/prisma/conntect.prisma.js";
const rateService = {
    async rate(req) {
        const { user_id, res_id, amount } = req.body;

        return prisma.rate_res.create({
            data: {
                user_id,
                res_id,
                amount,
                date_rate: new Date()
            }
        });
    },

    async getByUser(req) {
        return prisma.rate_res.findMany({
            where: { user_id: +req.params.userId },
            include: { restaurant: true }
        });
    },

    async getByRestaurant(req) {
        return prisma.rate_res.findMany({
            where: { res_id: +req.params.resId },
            include: { user: true }
        });
    }
};

export default rateService;
