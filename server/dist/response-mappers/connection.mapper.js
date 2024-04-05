"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionMapper = void 0;
class ConnectionMapper {
    mapCreateRoom(connection, svcResponse) {
        connection.send(JSON.stringify({ type: 'create', svcResponse }));
    }
    mapJoinRoom(connection, svcResponse) {
        const users = svcResponse.users;
        const currentUserId = svcResponse.userId;
        const currentUser = users.find(user => user.userId === currentUserId);
        users.forEach((user) => {
            if (user.connection !== connection) {
                const opponent = {
                    userId: currentUser.userId,
                    name: currentUser.name,
                    status: currentUser.status,
                    score: currentUser.score
                };
                user.connection.send(JSON.stringify({ type: 'join', opponent }));
                user.connection.send(JSON.stringify({ type: 'infoMessage', text: 'joined', opponent }));
            }
        });
        const opponents = users.filter(user => user.userId !== currentUserId).map(user => {
            const opponent = {
                userId: user.userId,
                name: user.name,
                status: user.status,
                score: user.score
            };
            return opponent;
        });
        connection.send(JSON.stringify({ type: 'opponents', opponents, userId: currentUserId }));
    }
    mapLeaveRoom(connection, svcResponse) {
        console.log(svcResponse);
    }
    mapCloseRoom(connection, svcResponse) {
        console.log(svcResponse);
    }
    mapPostMessage(connection, svcResponse) {
        const users = svcResponse.users;
        const userId = svcResponse.userId;
        const message = svcResponse.message;
        const currentUser = users.find(user => user.userId === userId);
        users.forEach((user) => {
            if (user.userId !== userId) {
                user.connection.send(JSON.stringify({ type: 'message', userId: userId, message }));
            }
        });
    }
    mapStatusUpddate(connection, svcResponse) {
        const users = svcResponse.users;
        const userId = svcResponse.userId;
        const currentUser = users.find(user => user.userId === userId);
        users.forEach((user) => {
            if (user.userId !== userId) {
                user.connection.send(JSON.stringify({ type: 'status', userId: userId, status: currentUser === null || currentUser === void 0 ? void 0 : currentUser.status }));
            }
        });
    }
    getAppropriateConnectionMapper(payload) {
        switch (payload.type) {
            case 'create':
                return this.mapCreateRoom;
            case 'join':
                return this.mapJoinRoom;
            case 'leave':
                return this.mapLeaveRoom;
            case 'close':
                return this.mapCloseRoom;
            case 'message':
                return this.mapPostMessage;
            case 'status':
                return this.mapStatusUpddate;
        }
    }
    createOpponent(user) {
        return {
            userId: user.userId,
            name: user.name,
            status: user.status,
            score: user.score
        };
    }
}
exports.ConnectionMapper = ConnectionMapper;
