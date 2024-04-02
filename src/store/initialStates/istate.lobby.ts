export interface Opponent {
    userId: string,
    name: string,
    status: string,
    score: number,
}
export interface IntialLobbyState {
    showLobby: boolean;
    opponents: Opponent[];
}

export const intialLobbyState: IntialLobbyState = {
    showLobby: false,
    opponents: []
}