"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contestRoutes = exports.authRoutes = void 0;
const auth_routes_1 = require("./auth.routes");
const contest_routes_1 = require("./contest.routes");
exports.authRoutes = new auth_routes_1.AuthenticationRoutes().createRoutes();
exports.contestRoutes = new contest_routes_1.ContestRoutes().createRoutes();
