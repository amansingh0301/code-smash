import { connection } from "websocket";
import { ConnectionPayload, CreateRoomPayload, JoinRoomPayload } from "../models";
import { CONSTANTS, generateRoomCode, generateUserId } from "../utils";
import { connectionClient, dbClient } from "../clients";

export class ConnectionServiceInterface {
    createRoom(connection: connection, payload: ConnectionPayload){
        const roomCode = generateRoomCode();
        const userId = generateUserId();
        connectionClient.createRoom(connection, roomCode, userId, payload as CreateRoomPayload);
        return {
            roomCode,
            userId,
        }
    }

    joinRoom(connection: connection, payload: ConnectionPayload){
        const roomCode = (payload as JoinRoomPayload).roomCode
        const userId = generateUserId();
        const users =connectionClient.JoinRoom(connection, roomCode, userId, payload as JoinRoomPayload);
        return {
            userId,
            users
        }
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