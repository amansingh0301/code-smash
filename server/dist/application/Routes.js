"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("../routes");
const middlewares_1 = require("../middlewares");
const handlers_1 = require("../handlers");
class Routes {
    constructor(server, ws) {
        server.use(body_parser_1.default.json());
        server.use(body_parser_1.default.urlencoded({ extended: true }));
        server.use((0, cookie_parser_1.default)());
        server.use('/', express_1.default.static(path_1.default.join(__dirname, '../../build')));
        //All features routes
        server.use('/auth', routes_1.authRoutes);
        server.use('/contest', routes_1.contestRoutes);
        ws.on('request', (req) => {
            const connection = req.accept();
            connection.on('message', (message) => handlers_1.connectionHandler.handleMessage(connection, message));
            connection.on('error', (error) => handlers_1.connectionHandler.handleError(connection, error));
        });
        server.get('/insert', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // await dbClient.connect();
            // await dbClient.insertQuestions();
            // await dbClient.close();
            res.send('not inserted successfully');
        }));
        //custom routes for healthcheck and metrics
        server.get('/health', (req, res) => {
            console.log('request received');
            res.json('health ok');
        });
        server.get('/*', (req, res) => {
            res.redirect('/');
        });
        server.use(middlewares_1.errorMiddleware);
    }
}
exports.Routes = Routes;
