import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { InitialState } from '../../../../store/initialStates';
import { CONSTANTS } from '../../../../utils';
import { PopUpModel } from '../..';
import { Verdict } from './Verdict';
import { GK } from './GK';
import { updatePopup } from '../../../../store/actions';

export function GKContest() {
    const remainingTime = useSelector((state: InitialState) => state.timer.remaining);
    const contestType = useSelector((state: InitialState) => state.contestGk.contestType);
    const popup = useSelector((state: InitialState) => state.popup);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleRemoveVerdict = () => {
        setLoading(false);
    }


    const handleEndContest = () => {
        dispatch(updatePopup({
            type: CONSTANTS.POPUP_TYPE_SUBMIT_CONTEST,
            message: 'Submit?',
            show: true
        }))
    }

    const handleInvalidTest = () => {
        dispatch(updatePopup({
            type: CONSTANTS.POPUP_TYPE_INVALID_TEST,
            message: 'Not Valid! Go to home page',
            show: true
        }))
    }

    useEffect(() => {
        if(remainingTime === 0)
            dispatch(updatePopup({
                type: CONSTANTS.TIME_OVER,
                message: "Time's up!",
                show: true
            }))
    },[remainingTime]);

    return (
        <>
            {loading && <Verdict loading={loading} removeVerdict={handleRemoveVerdict}/>}
            {popup.show && <PopUpModel/>}
            <div className='endContest' onClick={handleEndContest}></div>
            <div className={`contest-page`}>
            { contestType === 'GK' && <GK setLoading={setLoading} handleInvalidTest={handleInvalidTest}/> }
            </div>
        </>
    )
}

export default React.memo(GKContest);