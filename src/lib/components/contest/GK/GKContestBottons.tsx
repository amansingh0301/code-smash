import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../../store/initialState';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { CONSTANTS, getNextQuestionId, getPreviousQuestionId, isFirstQuestion, isLastQuestion } from '../../../../utils';
import { checkAnswer, submitContest, updateCurrentQuestionId, updateIsLast, updateLoadingVerdict, updatePopup } from '../../../../store/actions';
import { useNavigate } from 'react-router-dom';

interface GKContestButtonprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
}

export function GKContestButtons( {setLoading}: GKContestButtonprops) {
    const navigate = useNavigate();
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const isLast = useSelector((state: InitialState) => state.contest.isLastQuestion);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleGoBackClick = () => {
        dispatch(updateIsLast(false));
        if(currentQuestionId !== '-1'){
            const previousQuestionId = getPreviousQuestionId(questionsList, currentQuestionId);
            if(isFirstQuestion(questionsList,previousQuestionId)){
                dispatch(updatePopup({
                    type: CONSTANTS.POPUP_TYPE_END_TEST,
                    message: 'Do you want to exit?',
                    show: true
                }))
            }
            else if(previousQuestionId !== '-1')
                dispatch(updateCurrentQuestionId(previousQuestionId));
        }
    }

    const handleNextQuestionClick = () => {
        if(currentQuestionId !== '-1'){
            const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId);
            if(nextQuestionId !== '-1')
                dispatch(updateCurrentQuestionId(nextQuestionId));
        }
    }

    useEffect(() => {
        if(currentQuestionId === '-1')
            navigate('/form');
        if(isLastQuestion(questionsList,currentQuestionId))
            dispatch(updateIsLast(true));
    },[currentQuestionId])

    const handleCheckAnswer = () => {
        setLoading(true);
        dispatch(updateLoadingVerdict(true));
        dispatch(checkAnswer());
    }

    const handleSubmitContest = () => {
        dispatch(submitContest());
        navigate('/result');
    }

    return(
        <div className='contestButtons slide-in-top'>
            <button className='backButton' onClick={handleGoBackClick}>Back</button>
            <button className='checkAnswer' disabled={selectedOption === ''} onClick={handleCheckAnswer}>Check</button>
            {!isLast && <button className='nextQuestion' onClick={handleNextQuestionClick}>Next</button>}
            {isLast && <button className='submitContest' onClick={handleSubmitContest}>Submit</button>}
        </div>
    )
}