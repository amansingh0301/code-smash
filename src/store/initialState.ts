export interface InitialFormState {
    name: string,
    startingDifficulty: string,
    endingDifficulty: string,
    timer: number,
    roomCode: string,
}

export interface InitialContestState {
    score: number,
    opponentScore: number,
    totalAttempt: number,
    successfulAttempt: number
}

export interface InitialState {
    form: InitialFormState,
    contest: InitialContestState
}