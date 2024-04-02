"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionClient = void 0;
class ConnectionClient {
    constructor() {
        this.rooms = [];
    }
    createRoom(connection, roomCode, userId) {
        const user = {
            userId,
            connection
        };
        const users = [user];
        const room = {
            roomCode,
            users
        };
        this.rooms.push(room);
    }
    getRoom(roomCode) {
        return this.rooms.find(room => room.roomCode === roomCode);
    }
    getAllMembers(roomCode) {
        var _a;
        return (_a = this.rooms.find(room => room.roomCode === roomCode)) === null || _a === void 0 ? void 0 : _a.users;
    }
}
exports.ConnectionClient = ConnectionClient;
