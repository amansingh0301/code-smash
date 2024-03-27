import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { GKContestButtons, GKQuestion, PopUpModel } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { CONSTANTS, getNextQuestionId, getSelectedOption } from '../../utils';
import { fetchQuestion, updateCurrentQuestionId, updateSelectedOption, updateSelectedOptionsList } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';

interface GKprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setShowExitModel: Dispatch<SetStateAction<boolean>>,
    handleInvalidTest: () => void;
}

export function GK( { setLoading, setShowExitModel, handleInvalidTest }: GKprops) {
    const questionRef = useRef(null)
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const selectedOptionsList = useSelector((state: InitialState) => state.contest.selectedOptionsList);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    useEffect(() => {
        const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId)
        dispatch(updateCurrentQuestionId(nextQuestionId));
        if(questionsList && questionsList.length === 0) 
            handleInvalidTest();
        
    }, [questionsList])

    useEffect(() => {
        if(currentQuestionId && currentQuestionId !== '-1' && currentQuestionId !== ''){
            dispatch(fetchQuestion());
            const optionSelected = getSelectedOption(currentQuestionId, selectedOptionsList) as string;
            dispatch(updateSelectedOption(optionSelected));
            dispatch(updateSelectedOptionsList(currentQuestionId, optionSelected));
            if (questionRef.current) {
                const inputElement = questionRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
            }
        }
    }, [currentQuestionId])
    
    return (
        <>
        {
            !(questionsList && questionsList.length === 0) &&
                <div className='GK slide-in-right'>
                    <GKQuestion ref={questionRef}/>
                    <GKContestButtons setLoading={setLoading} setShowExitModel={setShowExitModel}/>
                </div>
        }
        </>

    )
}