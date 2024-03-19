"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = require('path');
const routes_1 = require("../routes");
const middlewares_1 = require("../middlewares");
class Routes {
    constructor(server) {
        server.use(body_parser_1.default.json());
        server.use(body_parser_1.default.urlencoded({ extended: true }));
        server.use('/', express_1.default.static(path.join(__dirname, '../../build')));
        //All features routes
        server.use('/auth', routes_1.authRoutes);
        //custom routes for healthcheck and metrics
        server.get('/health', (req, res) => {
            res.send('OK');
        });
        server.use(middlewares_1.errorMiddleware);
    }
}
exports.Routes = Routes;
