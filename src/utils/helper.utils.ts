import {v4 as uuid} from 'uuid';
import { InitialState, Message, Opponent, SelectedOptionList } from "../store/initialStates"
import { Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import { addMessage, addOpponent, fetchLobbyQuestions, fetchQuestionsList, updateCurrentUser, updateIsEveryOneReady, updateMode, updateOpponentStatus, updateQuestionsList, updateStartingIn, updateTime, updateTotalTime } from '../store/actions';
import { NavigateFunction } from 'react-router-dom';
import { toggleLoading } from '../store/actions/action.loader';
import { CONSTANTS } from '.';

export const prepareTokenBody = (state: InitialState) => {
    const form = state.form;
    return JSON.stringify({
        reqId: uuid(),
        name: form.name,
        time: form.time,
        questions: form.questions
    })
}

export const prepareContestQuestionsBody = (state: InitialState) => {
    const form = state.form;
    const contest = state.contestGk;
    return JSON.stringify({
        reqId: uuid(),
        questions: form.questions,
        type: contest.contestType
    })
}

export const prepareGetQuestionBody = (state: InitialState) => {
    const contest = state.contestGk;
    return JSON.stringify({
        reqId: uuid(),
        questionId: contest.currentQuestionId,
        type: contest.contestType
    })
}

export const preparecheckAnswerBody = (state: InitialState) => {
    const contest = state.contestGk;
    return JSON.stringify({
        reqId: uuid(),
        questionId: contest.currentQuestionId,
        selectedOption: contest.selectedOption,
        type: contest.contestType
    })
}

export const prepareSubmitContestBody = (state: InitialState) => {
    const contest = state.contestGk;
    return JSON.stringify({
        reqId: uuid(),
        questionResponseMap: contest.selectedOptionsList,
        type: contest.contestType
    })
}

export const getNextQuestionId = (questionsList: string[], currentQuestionId: string) => {

    if(!currentQuestionId)
        return questionsList[0];

    const nextQuestionIdIndex = questionsList.indexOf(currentQuestionId) + 1;
    if(nextQuestionIdIndex >= questionsList.length) 
        return '-1';

    return questionsList[nextQuestionIdIndex];
}

export const getQuestionNo = (questionsList: string[], currentQuestionId: string) => {

    if(!currentQuestionId)
        return null;

    return questionsList.indexOf(currentQuestionId) + 1;
}

export const getPreviousQuestionId = (questionsList: string[], currentQuestionId: string) => {

    if(currentQuestionId === '-1')
        return '-1';

    const previousQuestionIdIndex = questionsList.indexOf(currentQuestionId) - 1;
    if(previousQuestionIdIndex < 0) 
        return '-1';

    return questionsList[previousQuestionIdIndex];
}

export const isLastQuestion = (questionsList: string[], nextQuestionId: string) => {
    const nextQuestionIdIndex = questionsList.indexOf(nextQuestionId);
    if(nextQuestionIdIndex === questionsList.length-1) 
        return true;

    return false;
}

export const isFirstQuestion = (questionsList: string[], previousQuestionId: string) => {
    if(previousQuestionId === '-1')
        return true;

    return false;
}

export const getSelectedOption = (currentQuestionId: string, selectedOptionsList: SelectedOptionList) => {
    if(selectedOptionsList[currentQuestionId])
        return selectedOptionsList[currentQuestionId]

    return '';
}

export const getProgress = (questionsList: string[], currentQuestionId: string) => {
   return questionsList.indexOf(currentQuestionId)+1;
}

export const getNameFromOpponentList = (opponents: Opponent[], userId: string) => {
    return opponents.find(opponent => opponent.userId === userId)?.name;
}

export const getCurrentUserName = (currentUser: Opponent) => {
    return currentUser.name;
}

export const handleConnectionMessage = (dispatch: Dispatch, navigate: NavigateFunction, res: any) => {
    switch(res.type) {
        case 'create':
            return handleCreatedRoomRes(dispatch, navigate, res.svcResponse);
        case 'join':
            return handleSomeoneJoined(dispatch, navigate, res.opponent);
        case 'opponents':
            return handleOpponents(dispatch, navigate, res.opponents, res.userId);
        case 'status':
            return handleOpponentStatusUpdate(dispatch, res.userId, res.status);
        case 'infoMessage':
            return handleInfoMessage(dispatch, res.text, res.opponent);
        case 'message':
            return handleMessage(dispatch, res.message, res.userId);
        case 'inProgress':
            return handleInProgress(dispatch);
        case 'start':
            return startContest(dispatch, navigate, res.time);
        case 'questions':
            return setQuestionsList(dispatch, navigate, res.questions, res.timer);
    }
}

const handleCreatedRoomRes = (dispatch: Dispatch, navigate: NavigateFunction, res: any) => {
        localStorage.setItem('roomCode', res.roomCode);
        localStorage.setItem('userId', res.userId);
        dispatch(updateCurrentUser({
            userId: res.userId,
            status: 'joined'
        }))
        navigate('/lobby');
}

const handleSomeoneJoined = (dispatch: Dispatch, navigate: NavigateFunction, opponent: Opponent) => {
    dispatch(addOpponent(opponent));
}

const handleOpponents = (dispatch: Dispatch, navigate: NavigateFunction, opponents: Opponent[], userId: string) => {
    localStorage.setItem('userId', userId);
    dispatch(updateCurrentUser({
        userId,
        status: 'joined'
    }))
    opponents.forEach((opponent: Opponent) => dispatch(addOpponent(opponent)));
    navigate('/lobby');
    dispatch(toggleLoading());
}

const handleOpponentStatusUpdate = (dispatch: Dispatch, userId: string, status: string) => {
    dispatch(updateOpponentStatus(userId, status));
}

const handleInfoMessage = (dispatch: Dispatch, text: string, opponent: Opponent) => {
    const message: Message = {
        type: 'infoMessage',
        text: `${opponent.name} ${text}`,
        userId: opponent.userId
    }

    dispatch(addMessage(message));
}

const handleMessage = (dispatch: Dispatch, text: string, userId: string) => {
    const message: Message = {
        type: 'message',
        text,
        userId: userId
    }

    dispatch(addMessage(message));
}

const handleInProgress = (dispatch: Dispatch) => {
    alert('Contest in progress! Cannot join.');
    dispatch(toggleLoading());
}

const startContest = (dispatch: ThunkDispatch<any, any, any> , navigate: NavigateFunction, time: number) => {
    dispatch(updateIsEveryOneReady(true));
    let t = time;
    const intervalId = setInterval(async () => {
        t = t -1;
        dispatch(updateStartingIn(t));
        if(t == 0) {
            dispatch(toggleLoading());
            await dispatch(fetchLobbyQuestions());
            clearInterval(intervalId);
        }
    },1000)

    dispatch(updateMode(CONSTANTS.COMPETE));
}

const setQuestionsList = (dispatch: ThunkDispatch<any, any, any> , navigate: NavigateFunction, questions: string[], timer: string) => {
    dispatch(updateQuestionsList(questions));
    dispatch(toggleLoading());
    dispatch(updateTime(parseInt(timer)));
    dispatch(updateTotalTime(parseInt(timer)*60))
    navigate('/contest');
}