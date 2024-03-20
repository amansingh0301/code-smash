"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHandler = void 0;
const response_mappers_1 = require("../response-mappers");
const configs_1 = require("../configs");
class AuthHandler {
    handleToken(request, response) {
        //getConfig
        const config = configs_1.appConfig;
        //getServiceInterface and mappers
        //call service Interface
        //call mapper with response from service Interface
        return response_mappers_1.authMapper.getToken(request.body, config);
    }
}
exports.AuthHandler = AuthHandler;
