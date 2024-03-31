import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../../store/initialStates';
import { CONSTANTS, getNextQuestionId, getSelectedOption } from '../../../../utils';
import { fetchQuestion } from '../../../../store/actions/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { updateCurrentQuestionId, updatePopup, updateRemainingTime, updateSelectedOption, updateSelectedOptionsList } from '../../../../store/actions';
import { GKQuestion } from './GKQuestion';
import { GKContestButtons } from './GKContestBottons';

interface GKprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
    handleInvalidTest: () => void;
}

export function GK( { setLoading, handleInvalidTest }: GKprops) {
    const questionRef = useRef(null)
    const questionsList = useSelector((state: InitialState) => state.contestGk.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contestGk.currentQuestionId);
    const selectedOptionsList = useSelector((state: InitialState) => state.contestGk.selectedOptionsList);

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
                <div className='GK slide-in-top'>
                    <GKQuestion ref={questionRef}/>
                    <GKContestButtons setLoading={setLoading}/>
                </div>
        }
        </>

    )
}