import React, { useEffect } from 'react';
import { updateRemainingTime } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
export function Timer() {
    const remainingTime = useSelector((state: InitialState) => state.timer.remaining);
    const totalTime = useSelector((state: InitialState) => state.timer.totalTime);


    const dispatch = useDispatch();

    const updateRemainingTimer = () => {
        dispatch(updateRemainingTime());
    }

    useEffect(() => {
        const timer = setInterval(updateRemainingTimer,1000);

        return () => clearInterval(timer);
    },[])
    return (
        <div className='timer' style={ {
            height: `${(remainingTime*100)/totalTime}vh`,
            transition: 'height 0.5s ease-in-out'
        }}></div>
    )
}