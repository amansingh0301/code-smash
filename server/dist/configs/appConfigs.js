"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const errors_1 = require("../errors");
const utils_1 = require("../utils");
dotenv_1.default.config();
class AppConfig {
    constructor() {
        this.port = process.env.PORT;
        this.jsonurl = process.env.jsonurl;
    }
    getPort() {
        return this.port ? this.port : '8080';
    }
    getJsonurl() {
        if (this.jsonurl)
            return this.jsonurl;
        throw new errors_1.ConfigAbsentError(utils_1.CONSTANTS.JSON_URL_ABSENT_MESSAGE);
    }
}
exports.AppConfig = AppConfig;
