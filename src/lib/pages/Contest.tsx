import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { fetchQuestionsList } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
export function Contest() {
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    useEffect(()=>{
        
    }, [])
    return (
        <div className='contest-page'>
            {
                questionsList.map(questions => <div>{questions}</div>)
            }
        </div>
    )
}

export default React.memo(Contest);