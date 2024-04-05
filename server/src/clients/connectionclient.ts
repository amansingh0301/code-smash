import { connection } from "websocket";
import { CreateRoomPayload, JoinRoomPayload, Lobby, User } from "../models";

export class ConnectionClient {
    private users: User[];
    private lobby: Lobby[];

    constructor() {
        this.users = [];
        this.lobby = [];
    }

    createRoom(connection: connection, roomCode:string, userId: string, payload: CreateRoomPayload) {
        this.users.push(this.createNewUser(connection, userId, payload.name))
        this.lobby = [{
            roomCode,
            users: []
        }]
        this.getLobby(roomCode)?.users.push(userId)
    }

    JoinRoom(connection: connection, roomCode:string, userId: string, payload: JoinRoomPayload) {
        this.users.push(this.createNewUser(connection, userId, payload.name));
        const lobby = this.getLobby(roomCode);
        if(lobby){
            lobby.users.push(userId);
        }else{
            throw new Error(`Joining failed in room: ${roomCode}`);
        }

        return this.users.filter(user => lobby.users.includes(user.userId));
    }

    updateStatus(connection: connection, roomCode:string, userId: string, status: string) {
        const lobby = this.getLobby(roomCode);
        return this.users.map(user => {
            if(user.userId === userId){
                user.status = status
            }
            return user;
        }).filter(user => lobby?.users.includes(user.userId));
    }

    getLobby(roomCode: string) {
        return this.lobby.find((lobby: Lobby) => lobby.roomCode === roomCode);
    }

    getUsers(roomCode: string) {
        const lobby = this.getLobby(roomCode);
        if(lobby)
            return this.users.filter(user => lobby.users.includes(user.userId));
        
        throw new Error(`Post Message failed in room: ${roomCode}`);
    }

    createNewUser(connection: connection, userId: string, name: string) {
        return {
            connection,
            userId,
            name,
            status: 'joined',
            score: 0
        } as User;
    }

}