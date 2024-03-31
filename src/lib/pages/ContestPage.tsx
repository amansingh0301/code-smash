import React, { useEffect, useState } from 'react';
import { GK, PopUpModel } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { Verdict } from '../components/contest/GK/Verdict';
import { CONSTANTS } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { updatePopup } from '../../store/actions';

export function ContestPage() {
    const navigate = useNavigate();
    
    const contestType = useSelector((state: InitialState) => state.contest.contestType);
    const popup = useSelector((state: InitialState) => state.app.popup);
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

    const onPopState = () => {
        navigate('/form');
    }

    useEffect(() => {
        window.addEventListener('popstate', onPopState);

        return () => window.removeEventListener('popstate', onPopState);
    },[])

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

export default React.memo(ContestPage);