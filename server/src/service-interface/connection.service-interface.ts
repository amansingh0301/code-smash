import { connection } from "websocket";
import { ConnectionPayload, CreateRoomPayload, JoinRoomPayload, PostMessagePayload, statusUpdatePayload } from "../models";
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
        const roomCode = (payload as PostMessagePayload).roomCode;
        const userId = (payload as PostMessagePayload).userId;
        const message = (payload as PostMessagePayload).message;
        const users = connectionClient.getUsers(roomCode)
        return {
            message,
            userId,
            users
        }
    }

    updateStatus(connection: connection, payload: ConnectionPayload){
        const roomCode = (payload as statusUpdatePayload).roomCode;
        const userId = (payload as statusUpdatePayload).userId;
        const status = (payload as statusUpdatePayload).status;
        const users = connectionClient.updateStatus(connection, roomCode, userId, status);
        return {
            userId,
            users
        }
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
            case 'status':
                return this.updateStatus;
            case 'message':
                return this.postMessage;
        }
    }

}