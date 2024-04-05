

export interface CreateRoomPayload {
    type: 'create',
    name: string
}

export interface JoinRoomPayload {
    type: 'join',
    name: string,
    roomCode: string
}

interface LeaveRoomPayload {
    type: 'leave',
    roomCode: string
}

interface CloseRoomPayload {
    type: 'close',
    roomCode: string
}

export interface PostMessagePayload {
    type: 'message',
    message: string
    roomCode: string,
    userId: string    
}

export interface statusUpdatePayload {
    type: 'status',
    status: string,
    roomCode: string,
    userId: string
}

export type ConnectionPayload = 
| CreateRoomPayload
| JoinRoomPayload
| LeaveRoomPayload
| CloseRoomPayload
| PostMessagePayload
| statusUpdatePayload