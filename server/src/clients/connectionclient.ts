import { connection } from "websocket";
import { Room, User } from "../models";

export class ConnectionClient {
    private rooms: Room[];

    constructor() {
        this.rooms = [];
    }

    createRoom(connection: connection, roomCode:string, userId: string) {
        const user: User = {
            userId,
            connection
        } 
        const users: User[] = [user];
        const room: Room = {
            roomCode,
            users
        }

        this.rooms.push(room);
    }

    getRoom(roomCode: string) {
        return this.rooms.find(room => room.roomCode === roomCode);
    }

    getAllMembers(roomCode: string) {
        return this.rooms.find(room => room.roomCode === roomCode)?.users;
    }

}