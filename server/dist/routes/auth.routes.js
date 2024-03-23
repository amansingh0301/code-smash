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
        this.invalidateToken = this.invalidateToken.bind(this);
        this.validateToken = this.validateToken.bind(this);
    }
    createRoutes() {
        this.router.post('/token', (0, middlewares_1.tokenInputValidator)(middlewares_1.tokenInputs), this.handleToken);
        this.router.get('/invalidate', middlewares_1.tokenValidator, this.invalidateToken);
        this.router.get('/validate', middlewares_1.tokenValidator, this.validateToken);
        return this.router;
    }
    handleToken(request, response) {
        const token = handlers_1.authHandler.handleToken(request, response);
        response.cookie('accessToken', token, { httpOnly: true, secure: true });
        return response.json('Token Acquired');
    }
    invalidateToken(request, response) {
        const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
        const yesterday = new Date(Date.now() - oneDayInMilliseconds);
        response.cookie('accessToken', '', { httpOnly: true, secure: true, expires: yesterday });
        response.json('Invalidated');
    }
    validateToken(request, response) {
        response.json('verified');
    }
}
exports.AuthenticationRoutes = AuthenticationRoutes;
