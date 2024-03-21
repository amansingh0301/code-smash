import React,{ useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { checkAnswer, fetchQuestion, updateCurrentQuestionId, updateIsLast, updateSelectedOption } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getNextQuestionId, isLastQuestion } from '../../utils';
export function GK() {
    const questionRef = useRef(null)
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const currentQuestion = useSelector((state: InitialState) => state.contest.currentQuestion);
    const selectedOption = useSelector((state: InitialState) => state.contest.selectedOption);
    const verdict = useSelector((state: InitialState) => state.contest.verdict);
    const isLast = useSelector((state: InitialState) => state.contest.isLastQuestion);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const [loading, setLoading] = useState(false);
    const [showVerdict, setShowVerdict] = useState(false);

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
        dispatch(checkAnswer());
    }

    const selectOption = (option: string) => {
        dispatch(updateSelectedOption(option));
    }

    const handleRemoveVerdict = () => {
        setLoading(false);
    }

    useEffect(()=>{
        setShowVerdict(true);
    }, [verdict])

    useEffect(() => {
        const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId)
        dispatch(updateCurrentQuestionId(nextQuestionId));
    }, [questionsList])

    useEffect(() => {
        if(currentQuestionId !== '-1' && currentQuestionId !== ''){
            dispatch(fetchQuestion());
            if (questionRef.current) {
                const inputElement = questionRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
            }
        }
    }, [currentQuestionId])
    return (
        <div className='GK'>
            {loading && 
            <div className='loading' onClick={handleRemoveVerdict}>
                <span className="loader"></span>
                {
                    showVerdict &&
                    <div className='virdict'>
                        correct
                    </div>
                }
            </div>
            }
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
                <button className='checkAnswer' onClick={handleCheckAnswer}>Check</button>
                {!isLast && <button className='nextQuestion' onClick={handleNextQuestionClick}>Next</button>}
                {isLast && <button className='submitContest'>Submit</button>}
            </div>
        </div>

    )
}