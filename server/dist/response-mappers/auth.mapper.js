"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMapper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMapper {
    getToken(payload, configs) {
        const token = jsonwebtoken_1.default.sign(payload, configs.getSecret(), { expiresIn: (payload.time ? payload.time + 2 : 1) * 60 });
        return token;
    }
}
exports.AuthMapper = AuthMapper;
