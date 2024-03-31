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

export interface InitialContestGKState {
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

export const initialContestState: InitialContestGKState = {
    questionsList: [],
    currentQuestionId: '',
    currentQuestion: {
      question: '',
      options: []
    },
    selectedOption: '',
    contestType: 'GK',
    verdict: {
      correct: false,
      answer: '',
      explanation: ''
    },
    isLastQuestion: false,
    selectedOptionsList: {},
    result: {
      result: {
        correct: 0,
        inCorrect: 0,
        unAttempted: 0
      },
      questions: []
    }
};