import { connection } from "websocket";
import { ConnectionPayload } from "../models";
import { CONSTANTS, generateRoomCode, generateUserId } from "../utils";
import { connectionClient, dbClient } from "../clients";

export class ConnectionServiceInterface {
    createRoom(connection: connection, payload: ConnectionPayload){
        const roomCode = generateRoomCode();
        const userId = generateUserId();
        connectionClient.createRoom(connection, roomCode, userId);
        return {
            roomCode,
            userId,
        }
    }

    joinRoom(connection: connection, payload: ConnectionPayload){
    }

    leaveRoom(connection: connection, payload: ConnectionPayload){
    }

    closeRoom(connection: connection, payload: ConnectionPayload){
    }

    postMessage(connection: connection, payload: ConnectionPayload){
    }

    getAppropriateConnectionMethod(payload: ConnectionPayload) {
        switch(payload.type) {
            case 'create':
                return this.createRoom;
            case 'join':
                return this.joinRoom;
            case 'leave':
                return this.leaveRoom;
            case 'close':
                return this.closeRoom;
            case 'post':
                return this.postMessage;
        }
    }

}