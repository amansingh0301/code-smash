import { createAsyncThunk } from "@reduxjs/toolkit"
import { CONSTANTS } from "../utils/CONSTANTS"
import { getNextQuestionId, prepareContestQuestionsBody, prepareGetQuestionBody, prepareTokenBody, preparecheckAnswerBody } from "../utils"
import { InitialState, Question, Verdict } from "./initialState"

export const updateName = (name: string) => {
    return {
        type: CONSTANTS.UPDATE_NAME,
        payload: name
    }
}

export const startingDifficulty = (difficulty: string) => {
    return {
        type: CONSTANTS.STARTING_DIFFICULTY,
        payload: difficulty
    }
}

export const updateScore = (score: number) => {
    return {
        type: CONSTANTS.UPDATE_SCORE,
        payload: score
    }
}

export const updateOpponentScore = (score: number) => {
    return {
        type: CONSTANTS.UPDATE_OPPONENT_SCORE,
        payload: score
    }
}

export const updateTime = (time: number) => {
    return {
        type: CONSTANTS.UPDATE_TIME,
        payload: time
    }
}

export const updateNoOfQuestions= (questions: number) => {
    return {
        type: CONSTANTS.UPDATE_NUMBER_OF_QUESTIONS,
        payload: questions
    }
}

export const toggleLoading = () => {
    return {
        type: CONSTANTS.TOGGLE_LOADING
    }
}

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

export const fetchToken = createAsyncThunk(
    'data/fetch', // Action type string
    async ( _, thunkAPI ) => {
        const dispatch = thunkAPI.dispatch;
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            dispatch(toggleLoading());
            await fetch('/auth/token', {
                method: 'POST',
                body: prepareTokenBody(state),
                headers: {
                    'content-type': 'application/json'
                }
            });
            await dispatch(fetchQuestionsList());
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  );

  export const fetchQuestionsList = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const dispatch = thunkAPI.dispatch;
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            const response = await fetch('/contest/questions', {
                method: 'POST',
                body: prepareContestQuestionsBody(state),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const questionsList = await response.json();
            dispatch(toggleLoading());
            dispatch(updateQuestionsList(questionsList));
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  )
  
  export const fetchQuestion = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const dispatch = thunkAPI.dispatch;
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            dispatch(toggleLoading());
            const response = await fetch('/contest/question', {
                method: 'POST',
                body: prepareGetQuestionBody(state),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const question = await response.json();
            dispatch(updateCurrentQuestion(question));
            dispatch(toggleLoading());
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  )

  export const checkAnswer = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const dispatch = thunkAPI.dispatch;
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            dispatch(toggleLoading());
            const response = await fetch('/contest/check', {
                method: 'POST',
                body: preparecheckAnswerBody(state),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const verdict = await response.json();
            dispatch(updateVerdict(verdict));
            dispatch(toggleLoading());
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  )