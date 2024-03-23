import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getNextQuestionId, getPreviousQuestionId, isFirstQuestion, isLastQuestion } from '../../utils';
import { checkAnswer, updateCurrentQuestionId, updateIsLast, updateLoadingVerdict } from '../../store/actions';

interface GKContestButtonprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setShowExitModel: Dispatch<SetStateAction<boolean>>
}

export function GKContestButtons( {setLoading, setShowExitModel}: GKContestButtonprops) {
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
                setShowExitModel(true);
            }
            else if(previousQuestionId !== '-1')
                dispatch(updateCurrentQuestionId(previousQuestionId));
        }
    }

    const handleNextQuestionClick = () => {
        if(currentQuestionId !== '-1'){
            const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId);
            if(isLastQuestion(questionsList,nextQuestionId))
                dispatch(updateIsLast(true));
            if(nextQuestionId !== '-1')
                dispatch(updateCurrentQuestionId(nextQuestionId));
        }
    }

    const handleCheckAnswer = () => {
        setLoading(true);
        dispatch(updateLoadingVerdict(true));
        dispatch(checkAnswer());
    }

    return(
        <div className='contestButtons slide-in-right'>
            <button className='backButton' onClick={handleGoBackClick}>Back</button>
            <button className='checkAnswer' disabled={selectedOption === ''} onClick={handleCheckAnswer}>Check</button>
            {!isLast && <button className='nextQuestion' onClick={handleNextQuestionClick}>Next</button>}
            {isLast && <button className='submitContest'>Submit</button>}
        </div>
    )
}