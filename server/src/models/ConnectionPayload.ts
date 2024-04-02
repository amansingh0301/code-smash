

interface CreateRoom {
    type: 'create'
}

interface JoinRoom {
    type: 'join',
    roomId: string
}

interface LeaveRoom {
    type: 'leave',
    roomId: string
}

interface CloseRoom {
    type: 'close',
    roomId: string
}

interface PostMessage {
    type: 'post',
    roomId: string,
    message: string
}

export type ConnectionPayload = 
| CreateRoom 
| JoinRoom 
| LeaveRoom 
| CloseRoom 
| PostMessage