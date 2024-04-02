"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionMapper = exports.contestMapper = exports.authMapper = void 0;
const auth_mapper_1 = require("./auth.mapper");
const connection_mapper_1 = require("./connection.mapper");
const contest_mapper_1 = require("./contest.mapper");
exports.authMapper = new auth_mapper_1.AuthMapper();
exports.contestMapper = new contest_mapper_1.ContestMapper();
exports.connectionMapper = new connection_mapper_1.ConnectionMapper();
