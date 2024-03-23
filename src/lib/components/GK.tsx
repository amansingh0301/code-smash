import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { GKContestButtons, GKQuestion, PopUpModel } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { CONSTANTS, getNextQuestionId, getSelectedOption } from '../../utils';
import { fetchQuestion, updateCurrentQuestionId, updateSelectedOption } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';

interface GKprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setShowExitModel: Dispatch<SetStateAction<boolean>>
}

export function GK( { setLoading, setShowExitModel }: GKprops) {
    const questionRef = useRef(null)
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contest.currentQuestionId);
    const selectedOptionsList = useSelector((state: InitialState) => state.contest.selectedOptionsList);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    useEffect(() => {
        const nextQuestionId = getNextQuestionId(questionsList, currentQuestionId)
        dispatch(updateCurrentQuestionId(nextQuestionId));
    }, [questionsList])

    useEffect(() => {
        if(currentQuestionId && currentQuestionId !== '-1' && currentQuestionId !== ''){
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
        <>
        {
            questionsList && questionsList.length === 0 ?
                <PopUpModel type={CONSTANTS.POPUP_TYPE_INVALID_TEST}>
                    <div>
                        Your test is no longer valid!
                    </div>
                    <div>
                        Go to home page?
                    </div>
                </PopUpModel>
                :
                <div className='GK slide-in-right'>
                    <GKQuestion ref={questionRef}/>
                    <GKContestButtons setLoading={setLoading} setShowExitModel={setShowExitModel}/>
                </div>
        }
        </>

    )
}