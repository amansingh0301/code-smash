export interface Opponent {
    id: string,
    name: string,
    status: string,
    score: number
}
export interface IntialLobbyState {
    showLobby: boolean;
    opponents: Opponent[];
}

export const intialLobbyState: IntialLobbyState = {
    showLobby: false,
    opponents: [{
        id:'8887878',
        name: 'Aman',
        status: 'Joined',
        score: 0
    },
    {
        id:'8887878',
        name: 'Akash',
        status: 'Joined',
        score: 0
    },
    {
        id:'8887878',
        name: 'Pankita',
        status: 'Joined',
        score: 0
    },
]
}