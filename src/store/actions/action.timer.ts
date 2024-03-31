import { CONSTANTS } from "../../utils"

export const updateTotalTime = (totalTime: number) => {
    return {
        type: CONSTANTS.UPDATE_TOTAL_TIME,
        payload: totalTime
    }
}

export const updateRemainingTime = () => {
    return {
        type: CONSTANTS.UPDATE_REMAINING_TIME,
    }
}

export const updateProgress = (progress: number) => {
    return {
        type: CONSTANTS.UPDATE_PROGRESS,
        payload: progress
    }
}

export const resetTimer = () => {
    return {
        type: CONSTANTS.RESET
    }
}