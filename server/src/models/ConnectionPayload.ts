

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

interface PostMessage {
    type: 'post',
    roomCode: string,
    message: string
}

export type ConnectionPayload = 
| CreateRoomPayload
| JoinRoomPayload
| LeaveRoomPayload
| CloseRoomPayload
| PostMessage