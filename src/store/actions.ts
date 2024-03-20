import { createAsyncThunk } from "@reduxjs/toolkit"
import { CONSTANTS } from "../utils/CONSTANTS"

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

export const fetchData = createAsyncThunk(
    'data/fetch', // Action type string
    async ( _, { dispatch } ) => {
        try{
            dispatch(toggleLoading());
            const response = await fetch('/health');
            const data = await response.json();
            dispatch(toggleLoading());
            return data;
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  );
  