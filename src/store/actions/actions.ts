import { createAsyncThunk } from "@reduxjs/toolkit"
import { CONSTANTS } from "../../utils/CONSTANTS"
import { getWebsocketConnectionString, handleConnectionMessage, prepareContestQuestionsBody, prepareGetQuestionBody, prepareSubmitContestBody, prepareTokenBody, preparecheckAnswerBody } from "../../utils"
import { InitialState } from "../initialStates"
import { updateCurrentQuestion, updateLoadingVerdict, updateQuestionsList, updateResult, updateVerdict } from "./action.contest.gk"
import { toggleLoading } from "./action.loader"
import { updateShowLobby } from "."
import { useDispatch } from "react-redux"

let ws: WebSocket;

export const useConnect = () => {
    return (dispatch: any) => {

        ws = new WebSocket(`wss://${window.location.hostname}/`);

        ws.onmessage = (data) => {
            const res = JSON.parse(data.data);
            handleConnectionMessage(dispatch, res)
            dispatch(updateShowLobby(true));
        }

        ws.onclose = function () {
            setInterval(function () {
            ws = new WebSocket(`wss://${window.location.hostname}/`);
            }, 5000);
        };
        return ws;
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
            const mode = state.form.mode;
            if(mode === CONSTANTS.PRACTICE)
                await dispatch(fetchQuestionsList());
            else if(mode === CONSTANTS.COMPETE)
                await dispatch(establishConnection());
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  );

  export const invalidateToken = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        try{
            const response = await fetch('/auth/invalidate', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });
            await response.json();
        }catch(err){
            console.log(err);
        }
    }
  )

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
            dispatch(updateLoadingVerdict(false));
            dispatch(toggleLoading());
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  )

  export const submitContest = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const dispatch = thunkAPI.dispatch;
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            dispatch(toggleLoading());
            const response = await fetch('/contest/submit', {
                method: 'POST',
                body: prepareSubmitContestBody(state),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const result = await response.json();
            dispatch(updateResult(result));
            dispatch(toggleLoading());
        }catch(err){
            dispatch(toggleLoading());
            console.log(err);
        }
    }
  )

  export const establishConnection = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            ws.send(JSON.stringify({type: 'create', name: state.form.name}))
        }catch(err){
            console.log(err);
        }
    }
  )

  export const joinConnection = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            ws.send(JSON.stringify({type: 'join', name: state.form.name ,roomCode: localStorage.getItem('roomCode')}))
        }catch(err){
            console.log(err);
        }
    }
  )

  export const sendReadyUpdate = createAsyncThunk(
    'data/fetch',
    async ( _, thunkAPI ) => {
        const state: InitialState = thunkAPI.getState() as InitialState;
        try{
            ws.send(JSON.stringify({type: 'status', status: state.lobby.currentUser.status, roomCode: localStorage.getItem('roomCode'), userId: state.lobby.currentUser.userId}))
        }catch(err){
            console.log(err);
        }
    }
  )