export interface Question {
    question: string;
    options: string[];
}

export interface Verdict {
    correct: boolean,
    answer: string,
    explanation: string
}

export interface resultAnalytics {
    correct: number,
    inCorrect: number,
    unAttempted: number
}

export interface QuestionResponse {
    _id: string;
    question: string;
    options: string[];
    answer: string;
    marked: string;
    explanation: string;
}

export interface Result {
    result: resultAnalytics,
    questions: QuestionResponse[]
}

export interface SelectedOptionList {
    [key: string]: string;
}

export interface Popup {
    type: string,
    message: string,
    show: boolean
}

export interface ApplicationState {
    loadingVerdict: boolean;
    popup: Popup
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
    selectedOptionsList: SelectedOptionList,
    result: Result
}

export interface InitialState {
    app: ApplicationState,
    form: InitialFormState,
    contest: InitialContestState
}