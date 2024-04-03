"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionClient = void 0;
class ConnectionClient {
    constructor() {
        this.users = [];
        this.lobby = [];
    }
    createRoom(connection, roomCode, userId, payload) {
        var _a;
        this.users.push(this.createNewUser(connection, userId, payload.name));
        this.lobby = [{
                roomCode,
                users: []
            }];
        (_a = this.lobby.find((lobby) => lobby.roomCode === roomCode)) === null || _a === void 0 ? void 0 : _a.users.push(userId);
    }
    JoinRoom(connection, roomCode, userId, payload) {
        this.users.push(this.createNewUser(connection, userId, payload.name));
        const lobby = this.lobby.find((room) => room.roomCode === roomCode);
        if (lobby) {
            lobby.users.push(userId);
        }
        else {
            throw new Error(`Joining failed in room: ${roomCode}`);
        }
        return this.users.filter(user => lobby.users.includes(user.userId));
    }
    createNewUser(connection, userId, name) {
        return {
            connection,
            userId,
            name,
            status: 'joined',
            score: 0
        };
    }
}
exports.ConnectionClient = ConnectionClient;
