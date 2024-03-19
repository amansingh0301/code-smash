"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const Error_1 = require("./Error");
exports.errorMiddleware = new Error_1.ErrorMiddleware().handleError;
