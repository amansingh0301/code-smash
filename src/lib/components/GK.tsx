import React,{ Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { checkAnswer, fetchQuestion, updateCurrentQuestionId, updateIsLast, updateLoadingVerdict, updateSelectedOption } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getNextQuestionId, getPreviousQuestionId, isFirstQuestion, isLastQuestion } from '../../utils';

interface GKprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setShowExitModel: Dispatch<SetStateAction<boolean>>
}

export function GK( { setLoading, setShowExitModel }: GKprops) {
    const questionRef = useRef(null)
    
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const isLast = useSelector((state: InitialState) => state.contest.isLastQuestion);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleGoBackClick = () => {
        if(currentQuestionId !== '-1'){
            const previousQuestionId = getPreviousQuestionId(questionsList, currentQuestionId);
            if(isFirstQuestion(questionsList,previousQuestionId)){
                setShowExitModel(true);
                console.log('first');
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

    const selectOption = (option: string) => {
        dispatch(updateSelectedOption(option));
    }

    useEffect(() => {
        const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId)
        dispatch(updateCurrentQuestionId(nextQuestionId));
    }, [questionsList])

    useEffect(() => {
        if(currentQuestionId !== '-1' && currentQuestionId !== ''){
            dispatch(fetchQuestion());
            dispatch(updateSelectedOption(''));
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
                <button className='backButton' onClick={handleGoBackClick}>Back</button>
                <button className='checkAnswer' disabled={selectedOption === ''} onClick={handleCheckAnswer}>Check</button>
                {!isLast && <button className='nextQuestion' onClick={handleNextQuestionClick}>Next</button>}
                {isLast && <button className='submitContest'>Submit</button>}
            </div>
        </div>

    )
}