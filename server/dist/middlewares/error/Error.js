"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const errors_1 = require("../../errors");
class ErrorMiddleware {
    handleError(error, req, res, next) {
        if (!error) {
            next();
        }
        console.log(error.stack);
        if (error instanceof errors_1.BaseError) {
            res.status(error.statusCode).json(error.serializeErrors());
        }
        else {
            // Handle unexpected errors
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
exports.ErrorMiddleware = ErrorMiddleware;
