"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contestHandler = exports.authHandler = void 0;
const auth_handler_1 = require("./auth.handler");
const contest_handler_1 = require("./contest.handler");
exports.authHandler = new auth_handler_1.AuthHandler();
exports.contestHandler = new contest_handler_1.ContestHandler();
