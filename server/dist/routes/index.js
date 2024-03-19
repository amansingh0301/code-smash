"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const auth_routes_1 = require("./auth.routes");
exports.authRoutes = new auth_routes_1.AuthenticationRoutes().createRoutes();
