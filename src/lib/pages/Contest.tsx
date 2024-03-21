import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { fetchQuestion, fetchQuestionsList, updateCurrentQuestionId } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
export function Contest() {
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleNextQuestionClick = () => {
        if(currentQuestionId !== '-1')
            dispatch(updateCurrentQuestionId());
    }

    useEffect(() => {
        if(currentQuestionId !== '-1')
            dispatch(fetchQuestion());
    }, [currentQuestionId])
    return (
        <div className='contest-page'>
            <div>{currentQuestion.question}</div>
            {
                currentQuestion.options.map((option: string) => <div>{option}</div>)
            }
            <button onClick={handleNextQuestionClick}>Next</button>
        </div>
    )
}

export default React.memo(Contest);