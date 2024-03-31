import { CONSTANTS } from "../../utils"
import { Question, Result, Verdict } from "../initialStates"

export const updateQuestionsList = (questions: string[]) => {
    return {
        type: CONSTANTS.UPDATE_QUESTIONS_LIST,
        payload: questions
    }
}

export const updateCurrentQuestionId = (questionId: string) => {
    return {
        type: CONSTANTS.UPDATE_CURRENT_QUESTION_ID,
        payload: questionId
    }
}

export const updateCurrentQuestion = (question: Question) => {
    return {
        type: CONSTANTS.UPDATE_CURRENT_QUESTION,
        payload: question
    }
}

export const resetContest = () => {
    return {
        type: CONSTANTS.RESET
    }
}

export const updateContestType = (contestType: string) => {
    return {
        type: CONSTANTS.UPDATE_CONTEST_TYPE,
        payload: contestType
    }
}

export const updateSelectedOption = (option: string) => {
    return {
        type: CONSTANTS.UPDATE_SELCTED_OPTION,
        payload: option
    }
}

export const updateVerdict = (verdict: Verdict) => {
    return {
        type: CONSTANTS.UPDATE_VERDICT,
        payload: verdict
    }
}

export const updateIsLast = (isLast: boolean) => {
    return {
        type: CONSTANTS.UPDATE_IS_LAST,
        payload: isLast
    }
}

export const updateLoadingVerdict = (loadingVerdict: boolean) => {
    return {
        type: CONSTANTS.UPDATE_LOADING_VERDICT,
        payload: loadingVerdict
    }

}

export const updateSelectedOptionsList = (currentQuestionId: string, selectedOption: string) => {
    return {
        type: CONSTANTS.UPDATE_SELECTED_OPTIONS_LIST,
        payload: {
            currentQuestionId,
            selectedOption
        }
    }
}

export const updateResult = (result: Result) => {
    return {
        type: CONSTANTS.UPDATE_RESULT,
        payload: result
    }
}