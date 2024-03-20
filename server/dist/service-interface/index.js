"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contestServiceInterface = exports.authServiceInterface = void 0;
const auth_service_interface_1 = require("./auth.service-interface");
const contest_service_interface_1 = require("./contest.service-interface");
exports.authServiceInterface = new auth_service_interface_1.AuthServiceInterface();
exports.contestServiceInterface = new contest_service_interface_1.ContestServiceInterface();
