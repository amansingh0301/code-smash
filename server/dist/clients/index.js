"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionClient = exports.dbClient = void 0;
const connectionclient_1 = require("./connectionclient");
const dbclient_1 = require("./dbclient");
exports.dbClient = new dbclient_1.DBClient();
exports.connectionClient = new connectionclient_1.ConnectionClient();
