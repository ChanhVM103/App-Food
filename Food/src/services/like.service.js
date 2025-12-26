import { prisma } from "../common/prisma/conntect.prisma.js";

const likeService = {
    async like(req) {
        const { user_id, res_id } = req.body;

        return prisma.like_res.create({
            data: {
                user_id,
                res_id,
                date_like: new Date()
            }
        });
    },

    async unlike(req) {
    const { user_id, res_id } = req.body;

    return prisma.like_res.deleteMany({
        where: {
            user_id,
            res_id
        }
    });
},

    async getByUser(req) {
        const { userId } = req.params;

        return prisma.like_res.findMany({
            where: { user_id: +userId },
            include: { restaurant: true }
        });
    },

    async getByRestaurant(req) {
        const { resId } = req.params;

        return prisma.like_res.findMany({
            where: { res_id: +resId },
            include: { user: true }
        });
    }
};

export default likeService;
