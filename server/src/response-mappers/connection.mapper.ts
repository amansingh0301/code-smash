import { connection } from "websocket";
import { ConnectionPayload } from "../models";

export class ConnectionMapper {
    mapCreateRoom(connection: connection, svcResponse: any) {
        connection.send(JSON.stringify(svcResponse))
    }

    mapJoinRoom(connection: connection, svcResponse: any) {
        console.log(svcResponse);
    }

    mapLeaveRoom(connection: connection, svcResponse: any) {
        console.log(svcResponse);
    }

    mapCloseRoom(connection: connection, svcResponse: any) {
        console.log(svcResponse);
    }

    mapPostMessage(connection: connection, svcResponse: any) {
        console.log(svcResponse);
    }

    getAppropriateConnectionMapper(payload: ConnectionPayload) {
        switch(payload.type) {
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