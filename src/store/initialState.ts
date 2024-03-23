export interface Question {
    question: string;
    options: string[];
}

export interface Verdict {
    correct: boolean,
    answer: string,
    explanation: string
}

export interface ApplicationState {
    loadingVerdict: boolean
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
    contestType: string,
    verdict: Verdict,
    isLastQuestion: boolean,
    selectedOptionsList: Map<string, string>
}

export interface InitialState {
    app: ApplicationState,
    form: InitialFormState,
    contest: InitialContestState
}