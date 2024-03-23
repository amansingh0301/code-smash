import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { updateSelectedOption, updateSelectedOptionsList } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Option } from './Option';

interface GKQuestionsProps {
    ref: React.MutableRefObject<null>
}

export function GKQuestion({ref} : GKQuestionsProps) {
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const selectOption = (option: string) => {
        dispatch(updateSelectedOption(option));
        dispatch(updateSelectedOptionsList(currentQuestionId, option));
    }

    return (

        <div className='question slide-in-right' ref={ref}>
            <div className='questionLine slide-in-right'>{currentQuestion.question}</div>
            {
                currentQuestion.options.map((option: string, idx: number) => <Option option={option} selectedOption={selectedOption} selectOption={selectOption}/>)
            }
        </div>
                
    )
}