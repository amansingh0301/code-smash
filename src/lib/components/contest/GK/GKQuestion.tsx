import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../../store/initialStates';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Option } from './Option';
import { getQuestionNo } from '../../../../utils';
import { updateSelectedOption, updateSelectedOptionsList } from '../../../../store/actions';

interface GKQuestionsProps {
    ref: React.MutableRefObject<null>
}

export function GKQuestion({ref} : GKQuestionsProps) {
    const currentQuestion = useSelector((state: InitialState) => state.contestGk.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contestGk.selectedOption);
    const currentQuestionId = useSelector((state: InitialState) => state.contestGk.currentQuestionId);
    const questionsList = useSelector((state: InitialState) => state.contestGk.questionsList);
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