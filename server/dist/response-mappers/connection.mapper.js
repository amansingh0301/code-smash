"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionMapper = void 0;
class ConnectionMapper {
    mapCreateRoom(connection, svcResponse) {
        connection.send(JSON.stringify(svcResponse));
    }
    mapJoinRoom(connection, svcResponse) {
        console.log(svcResponse);
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
}
exports.ConnectionMapper = ConnectionMapper;
