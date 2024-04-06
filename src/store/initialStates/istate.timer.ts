export interface IntitalTimerState {
    totalTime: number,
    remaining: number,
    progress: number,
    isEveryOneReady: boolean,
    startingIn: number | null
}

export const intialTimerState: IntitalTimerState = {
    totalTime: 60,
    remaining: 60,
    progress: 0,
    isEveryOneReady: false,
    startingIn: null
}