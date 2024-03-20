"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokentValidator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../../errors");
const configs_1 = require("../../configs");
class TokentValidator {
    validateToken(request, response, next) {
        const token = request.cookies['accessToken'];
        if (!token) {
            next(new errors_1.InvalidTokenError('Unauthorized'));
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, configs_1.appConfig.getSecret());
            next();
        }
        catch (error) {
            next(new errors_1.InvalidTokenError('Unauthorized'));
        }
    }
    ;
}
exports.TokentValidator = TokentValidator;
