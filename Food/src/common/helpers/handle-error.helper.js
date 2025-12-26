import { responseError } from "./function.helper.js";
import { statusCodes } from "./status-code.helper.js";

export const appErorr = (err, req, res, next) => {
    console.log(`Middleware đặc biệt, bắt lỗi`, err);

    let statusCode = statusCodes.INTERNAL_SERVER_ERROR;
    let message = err?.message || "Internal Server Error";

    // ✅ Prisma error: unique constraint
    if (err.code === "P2002") {
        statusCode = statusCodes.CONFLICT; // 409
        message = "Dữ liệu đã tồn tại (trùng unique)";
    }

    // (sau này mở lại nếu dùng JWT)
    // if (err instanceof jwt.JsonWebTokenError) {
    //     statusCode = statusCodes.UNAUTHORIZED; // 401
    //     message = "Token không hợp lệ";
    // }

    // if (err instanceof jwt.TokenExpiredError) {
    //     statusCode = statusCodes.FORBIDDEN; // 403
    //     message = "Token đã hết hạn";
    // }

    const response = responseError(message, statusCode, err?.stack);

    res.status(statusCode).json(response);
};
