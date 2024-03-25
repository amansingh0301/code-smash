"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestHandler = void 0;
const configs_1 = require("../configs");
const response_mappers_1 = require("../response-mappers");
const service_interface_1 = require("../service-interface");
const utils_1 = require("../utils");
class ContestHandler {
    handleQuestions(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleQuestions' });
            //getConfig
            const config = configs_1.appConfig;
            //getServiceInterface and mappers
            //call service Interface
            const svcResponse = yield service_interface_1.contestServiceInterface.getQuestions(request.body, config);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleQuestions', config: config, svcResponse: svcResponse });
            //call mapper with response from service Interface
            const res = response_mappers_1.contestMapper.mapQuestions(svcResponse);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleSubmitContest', config: config, res: res });
            return res;
        });
    }
    handleQuestion(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleQuestion' });
            //getConfig
            const config = configs_1.appConfig;
            //getServiceInterface and mappers
            //call service Interface
            const svcResponse = yield service_interface_1.contestServiceInterface.getQuestion(request.body, config);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleQuestion', config: config, svcResponse: svcResponse });
            //call mapper with response from service Interface
            const res = response_mappers_1.contestMapper.mapQuestion(svcResponse);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleQuestion', config: config, res: res });
            return res;
        });
    }
    handleCheckAnswer(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleCheckAnswer' });
            //getConfig
            const config = configs_1.appConfig;
            //getServiceInterface and mappers
            //call service Interface
            const svcResponse = yield service_interface_1.contestServiceInterface.getQuestion(request.body, config);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleCheckAnswer', config: config, svcResponse: svcResponse });
            //call mapper with response from service Interface
            const res = response_mappers_1.contestMapper.mapCheckAnswer(svcResponse, request.body);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleCheckAnswer', config: config, res: res });
            return res;
        });
    }
    handleSubmitContest(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleSubmitContest' });
            //getConfig
            const config = configs_1.appConfig;
            //getServiceInterface and mappers
            //call service Interface
            const svcResponse = yield service_interface_1.contestServiceInterface.getQuestionList(request.body, config);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleSubmitContest', config: config, svcResponse: svcResponse });
            //call mapper with response from service Interface
            const res = response_mappers_1.contestMapper.mapSubmitContest(svcResponse, request.body);
            utils_1.logger.info({ bod: request.body, method: 'ContestHandler-handleSubmitContest', config: config, res: res });
            return res;
        });
    }
}
exports.ContestHandler = ContestHandler;
