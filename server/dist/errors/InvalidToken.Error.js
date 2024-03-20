"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTokenError = void 0;
const Base_Error_1 = require("./Base.Error");
class InvalidTokenError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message, 401);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.InvalidTokenError = InvalidTokenError;
