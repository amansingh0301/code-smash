"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionHandler = exports.contestHandler = exports.authHandler = void 0;
const auth_handler_1 = require("./auth.handler");
const connection_handler_1 = require("./connection.handler");
const contest_handler_1 = require("./contest.handler");
exports.authHandler = new auth_handler_1.AuthHandler();
exports.contestHandler = new contest_handler_1.ContestHandler();
exports.connectionHandler = new connection_handler_1.ConnectionHandler();
