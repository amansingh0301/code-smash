import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { getProgress } from '../../../utils';
import { updateProgress } from '../../../store/actions';
export function Progress() {
    const questionsList = useSelector((state: InitialState) => state.contestGk.questionsList);
    const currentQuestionId = useSelector((state: InitialState) => state.contestGk.currentQuestionId);
    const progress = useSelector((state: InitialState) => state.timer.progress);
    // const [currentProgress, setCurrentProgress] = useState(0);


    const dispatch = useDispatch();

    useEffect(() => {
        const prgs = getProgress(questionsList, currentQuestionId);
        dispatch(updateProgress(prgs));
    },[currentQuestionId])

    return (
        <div className='progress' style={ {
            height: `${(progress*100)/questionsList.length}vh`,
            transition: 'height 0.5s ease-in-out'
        }}></div>
    )
}