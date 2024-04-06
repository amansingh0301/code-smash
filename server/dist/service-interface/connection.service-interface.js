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
exports.ConnectionServiceInterface = void 0;
const utils_1 = require("../utils");
const clients_1 = require("../clients");
const _1 = require(".");
const configs_1 = require("../configs");
class ConnectionServiceInterface {
    createRoom(connection, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const roomCode = (0, utils_1.generateRoomCode)();
            const userId = (0, utils_1.generateUserId)();
            const questionIdList = yield _1.contestServiceInterface.getQuestions({ questions: payload.noOfQuestions, type: 'GK' }, configs_1.appConfig);
            yield clients_1.connectionClient.createRoom(connection, roomCode, userId, payload, questionIdList);
            return {
                roomCode,
                userId,
            };
        });
    }
    joinRoom(connection, payload) {
        const roomCode = payload.roomCode;
        const userId = (0, utils_1.generateUserId)();
        const users = clients_1.connectionClient.JoinRoom(connection, roomCode, userId, payload);
        return {
            userId,
            users
        };
    }
    leaveRoom(connection, payload) {
    }
    closeRoom(connection, payload) {
    }
    postMessage(connection, payload) {
        const roomCode = payload.roomCode;
        const userId = payload.userId;
        const message = payload.message;
        const users = clients_1.connectionClient.getUsers(roomCode);
        return {
            message,
            userId,
            users
        };
    }
    updateStatus(connection, payload) {
        const roomCode = payload.roomCode;
        const userId = payload.userId;
        const status = payload.status;
        const clientResponse = clients_1.connectionClient.updateStatus(connection, roomCode, userId, status);
        return {
            userId,
            clientResponse
        };
    }
    questions(connection, payload) {
        const roomCode = payload.roomCode;
        return clients_1.connectionClient.getLobbyQuestions(connection, roomCode);
    }
    getAppropriateConnectionMethod(payload) {
        switch (payload.type) {
            case 'create':
                return this.createRoom;
            case 'join':
                return this.joinRoom;
            case 'leave':
                return this.leaveRoom;
            case 'close':
                return this.closeRoom;
            case 'status':
                return this.updateStatus;
            case 'message':
                return this.postMessage;
            case 'questions':
                return this.questions;
        }
    }
}
exports.ConnectionServiceInterface = ConnectionServiceInterface;
