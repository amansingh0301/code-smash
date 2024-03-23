import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { fetchQuestion, updateCurrentQuestionId, updateSelectedOption, updateSelectedOptionsList } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getNextQuestionId, getSelectedOption } from '../../utils';
import { Option } from './Option';

export function GKQuestion() {
    const questionRef = useRef(null)
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const selectedOptionsList = useSelector((state: InitialState) => state.contest.selectedOptionsList);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const selectOption = (option: string) => {
        dispatch(updateSelectedOption(option));
        dispatch(updateSelectedOptionsList(currentQuestionId, option));
    }

    useEffect(() => {
        const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId)
        dispatch(updateCurrentQuestionId(nextQuestionId));
    }, [questionsList])

    useEffect(() => {
        if(currentQuestionId !== '-1' && currentQuestionId !== ''){
            dispatch(fetchQuestion());
            const optionSelected = getSelectedOption(currentQuestionId, selectedOptionsList) as string;
            dispatch(updateSelectedOption(optionSelected));
            if (questionRef.current) {
                const inputElement = questionRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
            }
        }
    }, [currentQuestionId])

    return (

        <div className='question slide-in-right' ref={questionRef}>
            <div className='questionLine slide-in-right'>{currentQuestion.question}</div>
            {
                currentQuestion.options.map((option: string, idx: number) => <Option option={option} selectedOption={selectedOption} selectOption={selectOption}/>)
            }
        </div>
                
    )
}