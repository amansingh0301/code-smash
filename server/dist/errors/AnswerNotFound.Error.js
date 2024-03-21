"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerNotFoundError = void 0;
const Base_Error_1 = require("./Base.Error");
class AnswerNotFoundError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message, 502);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.AnswerNotFoundError = AnswerNotFoundError;
