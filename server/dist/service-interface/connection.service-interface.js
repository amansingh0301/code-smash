"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionServiceInterface = void 0;
const utils_1 = require("../utils");
const clients_1 = require("../clients");
class ConnectionServiceInterface {
    createRoom(connection, payload) {
        const roomCode = (0, utils_1.generateRoomCode)();
        const userId = (0, utils_1.generateUserId)();
        clients_1.connectionClient.createRoom(connection, roomCode, userId, payload);
        return {
            roomCode,
            userId,
        };
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
        const users = clients_1.connectionClient.updateStatus(connection, roomCode, userId, status);
        return {
            userId,
            users
        };
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
        }
    }
}
exports.ConnectionServiceInterface = ConnectionServiceInterface;
