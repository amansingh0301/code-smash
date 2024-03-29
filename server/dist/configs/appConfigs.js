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
        this.secret = process.env.secret;
        this.mongodb_uri = process.env.mongodb_uri;
        this.db = process.env.db;
    }
    getPort() {
        return this.port ? this.port : '8080';
    }
    getSecret() {
        if (this.secret)
            return this.secret;
        throw new errors_1.ConfigAbsentError(utils_1.CONSTANTS.SECRET_ABSENT);
    }
    getMonogdb_uri() {
        if (this.mongodb_uri)
            return this.mongodb_uri;
        throw new errors_1.ConfigAbsentError(utils_1.CONSTANTS.MONGODB_URI_ABSENT);
    }
    getDbName() {
        if (this.db)
            return this.db;
        throw new errors_1.ConfigAbsentError(utils_1.CONSTANTS.DB_NAME_ABSENT);
    }
}
exports.AppConfig = AppConfig;
