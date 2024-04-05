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
        (_a = this.getLobby(roomCode)) === null || _a === void 0 ? void 0 : _a.users.push(userId);
    }
    JoinRoom(connection, roomCode, userId, payload) {
        this.users.push(this.createNewUser(connection, userId, payload.name));
        const lobby = this.getLobby(roomCode);
        if (lobby) {
            lobby.users.push(userId);
        }
        else {
            throw new Error(`Joining failed in room: ${roomCode}`);
        }
        return this.users.filter(user => lobby.users.includes(user.userId));
    }
    updateStatus(connection, roomCode, userId, status) {
        const lobby = this.getLobby(roomCode);
        return this.users.map(user => {
            if (user.userId === userId) {
                user.status = status;
            }
            return user;
        }).filter(user => lobby === null || lobby === void 0 ? void 0 : lobby.users.includes(user.userId));
    }
    getLobby(roomCode) {
        return this.lobby.find((lobby) => lobby.roomCode === roomCode);
    }
    getUsers(roomCode) {
        const lobby = this.getLobby(roomCode);
        if (lobby)
            return this.users.filter(user => lobby.users.includes(user.userId));
        throw new Error(`Post Message failed in room: ${roomCode}`);
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
