import { connection } from "websocket"

export interface User {
    connection: connection,
    userId: string,
    name: string,
    status: string,
    score: number
}

export interface Lobby {
    roomCode: string,
    users: string[];
}