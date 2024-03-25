"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryError = void 0;
const Base_Error_1 = require("./Base.Error");
class QueryError extends Base_Error_1.BaseError {
    constructor(message) {
        super(message, 500);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.QueryError = QueryError;
