export interface InitialFormState {
    name: string,
    questions: number,
    maxQuestions: number,
    startingDifficulty: string,
    endingDifficulty: string,
    time: number,
    minimumTime: number,
    maximumTime: number,
    roomCode: string,
    toggleLoading: boolean,
}

export interface InitialContestState {
    score: number,
    opponentScore: number,
    totalAttempt: number,
    successfulAttempt: number,
    questionsList: number[]
}

export interface InitialState {
    form: InitialFormState,
    contest: InitialContestState
}