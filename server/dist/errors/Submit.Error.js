"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitError = void 0;
const Base_Error_1 = require("./Base.Error");
class SubmitError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message, 500);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.SubmitError = SubmitError;
