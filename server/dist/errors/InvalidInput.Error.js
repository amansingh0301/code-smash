"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidInputError = void 0;
const Base_Error_1 = require("./Base.Error");
class InvalidInputError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message, 400);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.InvalidInputError = InvalidInputError;
