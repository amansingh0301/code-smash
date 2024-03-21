export interface Question {
    question: string;
    options: string[];
}

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
    questionsList: string[],
    currentQuestionId: string,
    currentQuestion: Question,
    selectedOption: string,
    contestType: string
}

export interface InitialState {
    form: InitialFormState,
    contest: InitialContestState
}