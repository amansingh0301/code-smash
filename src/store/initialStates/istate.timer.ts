export interface IntitalTimerState {
    totalTime: number,
    remaining: number,
    progress: number
}

export const intialTimerState: IntitalTimerState = {
    totalTime: 60,
    remaining: 60,
    progress: 0
}