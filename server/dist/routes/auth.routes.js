"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRoutes = void 0;
const express_1 = __importDefault(require("express"));
class AuthenticationRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.handleToken = this.handleToken.bind(this);
    }
    createRoutes() {
        this.router.get('/token', this.handleToken);
        return this.router;
    }
    handleToken(request, response) {
        console.log('request received');
        return response.send('Token');
    }
}
exports.AuthenticationRoutes = AuthenticationRoutes;
