import React,{ useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { fetchQuestion, updateCurrentQuestionId, updateSelectedOption } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
export function GK() {
    const questionRef = useRef(null)
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleNextQuestionClick = () => {
        if(currentQuestionId !== '-1')
            dispatch(updateCurrentQuestionId());
    }

    const selectOption = (option: string) => {
        dispatch(updateSelectedOption(option));
    }

    useEffect(() => {
        if(currentQuestionId !== '-1'){
            dispatch(fetchQuestion());
            if (questionRef.current) {
                const inputElement = questionRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
            }
        }
    }, [currentQuestionId])
    return (
        <div className='GK'>
            <div className='question' ref={questionRef}>
                <div className='questionLine'>{currentQuestion.question}</div>
                {
                    currentQuestion.options.map((option: string, idx: number) => 
                    <div className='questionOptions' key={option} onClick={() => {selectOption(option)}}>
                        <input type='radio' value={option} checked={selectedOption === option}></input>
                        <div className='radioDiv'>
                            <span className="radio-button"></span>
                        </div>
                        {option}
                    </div>)
                }
            </div>
            <div className='contestButtons'>
            <button onClick={handleNextQuestionClick}>Check</button>
                <button onClick={handleNextQuestionClick}>Next</button>
            </div>
        </div>

    )
}