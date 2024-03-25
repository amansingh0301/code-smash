"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHandler = void 0;
const response_mappers_1 = require("../response-mappers");
const configs_1 = require("../configs");
const utils_1 = require("../utils");
class AuthHandler {
    handleToken(request, response) {
        utils_1.logger.info({ bod: request.body, method: 'AuthHandler-handleToken' });
        //getConfig
        const config = configs_1.appConfig;
        utils_1.logger.info({ bod: request.body, method: 'AuthHandler-handleToken', config: config });
        //getServiceInterface and mappers
        //call service Interface
        //call mapper with response from service Interface
        const res = response_mappers_1.authMapper.getToken(request.body, config);
        utils_1.logger.info({ bod: request.body, method: 'AuthHandler-handleToken', config: config, res: res });
        return res;
    }
}
exports.AuthHandler = AuthHandler;
