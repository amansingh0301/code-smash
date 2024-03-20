import { createAsyncThunk } from "@reduxjs/toolkit"
import { CONSTANTS } from "../utils/CONSTANTS"
import { prepareGetQuestionsBody, prepareTokenBody } from "../utils"
import { InitialState } from "./initialState"

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
            dispatch(fetchQuestionsList());
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
                body: prepareGetQuestionsBody(state.form),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const questionsList = await response.json();
            dispatch(updateQuestionsList(questionsList));
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  )
  