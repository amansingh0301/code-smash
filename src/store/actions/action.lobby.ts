import { CONSTANTS } from "../../utils"
import { Opponent } from "../initialStates"

export const updateShowLobby = (show: boolean) => {
    return {
        type: CONSTANTS.UPDATE_SHOW_LOBBY,
        payload: show
    }
}

export const addOpponent = (opponent: Opponent) => {
    return {
        type: CONSTANTS.ADD_OPPONENT,
        payload: opponent
    }
}

export const updateOpponentName = (id: string, name: string) => {
    return {
        type: CONSTANTS.UPDATE_OPPONENT_NAME,
        payload: {
            id,
            name
        }
    }
}

export const updateOpponentScore = (id: string, score: number) => {
    return {
        type: CONSTANTS.UPDATE_OPPONENT_SCORE,
        payload: {
            id,
            score
        }
    }
}

export const updateOpponentStatus = (id: string, status: string) => {
    return {
        type: CONSTANTS.UPDATE_OPPONENT_STATUS,
        payload: {
            id,
            status
        }
    }
}