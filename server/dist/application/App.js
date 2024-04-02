"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const websocket_1 = require("websocket");
const dotenv_1 = __importDefault(require("dotenv"));
const Routes_1 = require("./Routes");
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.httpServer = http_1.default.createServer(this.app);
        const ws = new websocket_1.server({ httpServer: this.httpServer });
        new Routes_1.Routes(this.app, ws);
    }
    start(port) {
        return new Promise((resolve, reject) => {
            this.httpServer.listen(parseInt(port), () => {
                resolve(port);
            })
                .on('error', (err) => reject(err));
        });
    }
}
exports.App = App;
