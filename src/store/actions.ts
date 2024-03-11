import { CONSTANTS } from "../utils/CONSTANTS"

export const updateName = (name: string) => {
    return {
        type: CONSTANTS.UPDATE_NAME,
        payload: name
    }
}

export const startingDifficulty = (difficulty: string) => {
    return {
        type: CONSTANTS.STARTING_DIFFICULTY,
        payload: difficulty
    }
}

export const updateScore = (score: number) => {
    return {
        type: CONSTANTS.UPDATE_SCORE,
        payload: score
    }
}

export const updateOpponentScore = (score: number) => {
    return {
        type: CONSTANTS.UPDATE_OPPONENT_SCORE,
        payload: score
    }
}