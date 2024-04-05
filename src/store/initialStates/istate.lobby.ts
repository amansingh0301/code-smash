export interface Opponent {
    userId: string,
    name: string,
    status: string,
    score: number,
    message?: string 
}
export interface IntialLobbyState {
    showLobby: boolean;
    currentUser: Opponent;
    opponents: Opponent[];
}

export const intialLobbyState: IntialLobbyState = {
    showLobby: false,
    currentUser: {
        userId: '',
        name: '',
        status: '',
        score: 0
    },
    opponents: []
}