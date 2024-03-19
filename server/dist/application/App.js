"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Routes_1 = require("./Routes");
dotenv_1.default.config();
class App {
    constructor() {
        this.httpsServer = (0, express_1.default)();
        new Routes_1.Routes(this.httpsServer);
    }
    start(port) {
        return new Promise((resolve, reject) => {
            this.httpsServer.listen(parseInt(port), () => {
                resolve(port);
            })
                .on('error', (err) => reject(err));
        });
    }
}
exports.App = App;
