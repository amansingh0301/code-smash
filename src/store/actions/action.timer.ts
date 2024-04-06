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

export const updateStartingIn = (time: number) => {
    return {
        type: CONSTANTS.UPDATE_STARTING_IN,
        payload: time
    }
}

export const updateIsEveryOneReady = (isEveryOneReady: boolean) => {
    return {
        type: CONSTANTS.UPDATE_IS_EVERYONE_READY,
        payload: isEveryOneReady
    }
}