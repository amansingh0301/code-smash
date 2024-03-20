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
class ContestHandler {
    handleQuestions(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            //getConfig
            const config = configs_1.appConfig;
            //getServiceInterface and mappers
            //call service Interface
            const svcResponse = yield service_interface_1.contestServiceInterface.getQuestions(request.body, config);
            //call mapper with response from service Interface
            return response_mappers_1.contestMapper.mapQuestions(svcResponse);
        });
    }
}
exports.ContestHandler = ContestHandler;
