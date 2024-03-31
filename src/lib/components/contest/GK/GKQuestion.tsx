import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../../store/initialState';
import { updateSelectedOption, updateSelectedOptionsList } from '../../../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Option } from './Option';
import { getQuestionNo } from '../../../../utils';

interface GKQuestionsProps {
    ref: React.MutableRefObject<null>
}

export function GKQuestion({ref} : GKQuestionsProps) {
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const [questionNo, setQuestionNo] = useState<null | number>();

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const selectOption = (option: string) => {
        dispatch(updateSelectedOption(option));
        dispatch(updateSelectedOptionsList(currentQuestionId, option));
    }

    useEffect(() => {
        setQuestionNo(getQuestionNo(questionsList, currentQuestionId));
    }, [currentQuestionId])

    return (

        <div className='question slide-in-top' ref={ref}>
            <div className='questionLine slide-in-top'>{`Q${questionNo}.`} {currentQuestion.question}</div>
            {
                currentQuestion.options.map((option: string, idx: number) => <Option option={option} selectedOption={selectedOption} selectOption={selectOption}/>)
            }
        </div>
                
    )
}