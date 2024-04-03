"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionMapper = void 0;
class ConnectionMapper {
    mapCreateRoom(connection, svcResponse) {
        connection.send(JSON.stringify({ type: 'created', svcResponse }));
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
                user.connection.send(JSON.stringify({ type: 'joined', opponent }));
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
        console.log(svcResponse);
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
            case 'post':
                return this.mapPostMessage;
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
