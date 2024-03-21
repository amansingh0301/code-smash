"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionNotFoundError = void 0;
const Base_Error_1 = require("./Base.Error");
class QuestionNotFoundError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message, 404);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.QuestionNotFoundError = QuestionNotFoundError;
