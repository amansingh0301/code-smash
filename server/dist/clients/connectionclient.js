"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionClient = void 0;
const utils_1 = require("../utils");
class ConnectionClient {
    constructor() {
        this.users = [];
        this.lobby = [];
    }
    createRoom(connection, roomCode, userId, payload, questionIdList) {
        var _a;
        this.users.push(this.createNewUser(connection, userId, payload.name));
        this.lobby = [{
                roomCode,
                users: [],
                time: payload.time,
                questions: questionIdList
            }];
        (_a = this.getLobby(roomCode)) === null || _a === void 0 ? void 0 : _a.users.push(userId);
    }
    JoinRoom(connection, roomCode, userId, payload) {
        const lobby = this.getLobby(roomCode);
        if (lobby) {
            if (this.isEveryOneReady(lobby))
                return new Error(utils_1.CONSTANTS.CONTEST_IN_PROGRESS);
            this.users.push(this.createNewUser(connection, userId, payload.name));
            lobby.users.push(userId);
        }
        else {
            throw new Error(`Joining failed in room: ${roomCode}`);
        }
        return this.users.filter(user => lobby.users.includes(user.userId));
    }
    updateStatus(connection, roomCode, userId, status) {
        const lobby = this.getLobby(roomCode);
        const users = this.users.map(user => {
            if (user.userId === userId) {
                user.status = status;
            }
            return user;
        }).filter(user => lobby === null || lobby === void 0 ? void 0 : lobby.users.includes(user.userId));
        const isEveryOneReady = this.isEveryOneReady(lobby);
        return {
            users,
            allReady: isEveryOneReady
        };
    }
    getLobbyQuestions(connection, roomCode) {
        const lobby = this.getLobby(roomCode);
        return {
            questions: lobby.questions,
            time: lobby.time
        };
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
    isEveryOneReady(lobby) {
        let totalUsers = 0;
        let isEveryoneready = true;
        const res = this.users.map(user => {
            if (lobby.users.includes(user.userId)) {
                totalUsers++;
                if (user.status !== 'ready')
                    isEveryoneready = false;
            }
        });
        if (totalUsers < 2)
            return false;
        return isEveryoneready;
    }
}
exports.ConnectionClient = ConnectionClient;
