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
exports.ConnectionHandler = void 0;
const utils_1 = require("../utils");
const service_interface_1 = require("../service-interface");
const response_mappers_1 = require("../response-mappers");
class ConnectionHandler {
    handleMessage(connection, message) {
        const payload = JSON.parse(message.utf8Data);
        const serviceInterface = service_interface_1.connectionServiceInterface.getAppropriateConnectionMethod(payload);
        const svcResponse = serviceInterface(connection, payload);
        const mapper = response_mappers_1.connectionMapper.getAppropriateConnectionMapper(payload);
        mapper(connection, svcResponse);
    }
    handleError(connection, error) {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.logger.error({ error: error });
            connection.close();
        });
    }
}
exports.ConnectionHandler = ConnectionHandler;
