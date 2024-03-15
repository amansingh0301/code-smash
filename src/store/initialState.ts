export interface InitialFormState {
    name: string,
    questions: number,
    startingDifficulty: string,
    endingDifficulty: string,
    time: number,
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