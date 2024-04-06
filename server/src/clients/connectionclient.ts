import { connection } from "websocket";
import { CreateRoomPayload, JoinRoomPayload, Lobby, User } from "../models";
import { CONSTANTS } from "../utils";
import { ObjectId } from "mongodb";

export class ConnectionClient {
    private users: User[];
    private lobby: Lobby[];

    constructor() {
        this.users = [];
        this.lobby = [];
    }

    createRoom(connection: connection, roomCode:string, userId: string, payload: CreateRoomPayload, questionIdList: ObjectId[]) {
        this.users.push(this.createNewUser(connection, userId, payload.name))
        this.lobby = [{
            roomCode,
            users: [],
            time: payload.time,
            questions: questionIdList
        }]
        this.getLobby(roomCode)?.users.push(userId)
    }

    JoinRoom(connection: connection, roomCode:string, userId: string, payload: JoinRoomPayload) {
        const lobby = this.getLobby(roomCode);
        if(lobby){
            if(this.isEveryOneReady(lobby))
                return new Error(CONSTANTS.CONTEST_IN_PROGRESS);
            this.users.push(this.createNewUser(connection, userId, payload.name));
            lobby.users.push(userId);
        }else{
            throw new Error(`Joining failed in room: ${roomCode}`);
        }

        return this.users.filter(user => lobby.users.includes(user.userId));
    }

    updateStatus(connection: connection, roomCode:string, userId: string, status: string) {
        const lobby = this.getLobby(roomCode) as Lobby;
        const users = this.users.map(user => {
            if(user.userId === userId){
                user.status = status
            }
            return user;
        }).filter(user => lobby?.users.includes(user.userId));

        const isEveryOneReady = this.isEveryOneReady(lobby);

        return {
            users,
            allReady:  isEveryOneReady
        };
    }

    getLobbyQuestions(connection: connection, roomCode: string) {
        const lobby = this.getLobby(roomCode) as Lobby;
        return {
            questions: lobby.questions,
            time: lobby.time
        };
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

    isEveryOneReady(lobby: Lobby) {
        let totalUsers: number = 0;
        let isEveryoneready = true;
        const res = this.users.map(user => {
            if(lobby.users.includes(user.userId)) {
                totalUsers++;
                if(user.status !== 'ready')
                    isEveryoneready = false;
            }
        });

        if(totalUsers < 2)
            return false;
        return isEveryoneready;
    }

}