import { connection } from "websocket"

export interface User {
    connection: connection,
    userId: string
}

export interface Room {
    roomCode: string,
    users: User[]
}