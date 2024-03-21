import { createAsyncThunk } from "@reduxjs/toolkit"
import { CONSTANTS } from "../utils/CONSTANTS"
import { prepareContestQuestionsBody, prepareGetQuestionBody, prepareTokenBody } from "../utils"
import { InitialState, Question } from "./initialState"

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

export const updateQuestionsList = (questions: number[]) => {
    return {
        type: CONSTANTS.UPDATE_QUESTIONS_LIST,
        payload: questions
    }
}

export const updateCurrentQuestionId = () => {
    return {
        type: CONSTANTS.UPDATE_CURRENT_QUESTION_ID,
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

export const fetchToken = createAsyncThunk(
    'data/fetch', // Action type string
    async ( _, thunkAPI ) => {
        const dispatch = thunkAPI.dispatch;
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            dispatch(toggleLoading());
            await fetch('/auth/token', {
                method: 'POST',
                body: prepareTokenBody(state.form),
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
                body: prepareContestQuestionsBody(state.form),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const questionsList = await response.json();
            dispatch(updateQuestionsList(questionsList));
            dispatch(toggleLoading());
            dispatch(updateCurrentQuestionId());
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
                body: prepareGetQuestionBody(state.contest),
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