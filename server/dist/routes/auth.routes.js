"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const handlers_1 = require("../handlers");
class AuthenticationRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.handleToken = this.handleToken.bind(this);
        this.verifyToken = this.verifyToken.bind(this);
    }
    createRoutes() {
        this.router.post('/token', (0, middlewares_1.tokenInputValidator)(middlewares_1.tokenInputs), this.handleToken);
        this.router.post('/verify', middlewares_1.tokenValidator, this.verifyToken);
        return this.router;
    }
    handleToken(request, response) {
        const token = handlers_1.authHandler.handleToken(request, response);
        response.cookie('accessToken', token, { httpOnly: true, secure: true });
        return response.json('Token Acquired');
    }
    verifyToken(request, response) {
        response.json('verified');
    }
}
exports.AuthenticationRoutes = AuthenticationRoutes;
