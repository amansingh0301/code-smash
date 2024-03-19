"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigAbsentError = void 0;
const Base_Error_1 = require("./Base.Error");
class ConfigAbsentError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.ConfigAbsentError = ConfigAbsentError;
