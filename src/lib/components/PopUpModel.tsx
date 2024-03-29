import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../utils';
import { submitContest, updatePopup } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';

export function PopUpModel() {
    const navigate = useNavigate();
    const popup = useSelector((state: InitialState) => state.app.popup);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleExit = () => {
        dispatch(updatePopup({
            type: '',
            message: '',
            show: false
        }))
        navigate('/');
    }

    const handleSubmitContest = () => {
        dispatch(submitContest());
        dispatch(updatePopup({
            type: '',
            message: '',
            show: false
        }))
        navigate('/result');
    }

    const removePopUpModel = () => {
        dispatch(updatePopup({
            type: '',
            message: '',
            show: false
        }))
    }

    switch(popup.type) {
        case CONSTANTS.POPUP_TYPE_END_TEST:
            return(
                <div className='loading' onClick={removePopUpModel}>
                    <div className='exitModel slide-in-right'>
                        <div className='exitQuestion'>{popup.message}</div>
                        <div className='exitOptions'>
                            <button className='exitNo exitButtons' onClick={removePopUpModel}>No</button>
                            <button className='exitYes exitButtons' onClick={handleExit}>Yes</button>
                        </div>
                    </div>
                </div>
            );
        case CONSTANTS.POPUP_TYPE_SUBMIT_CONTEST:
            return(
                <div className='loading' onClick={removePopUpModel}>
                    <div className='exitModel slide-in-right'>
                        <div className='exitQuestion'>{popup.message}</div>
                        <div className='exitOptions'>
                            <button className='exitNo exitButtons' onClick={removePopUpModel}>No</button>
                            <button className='exitYes exitButtons' onClick={handleSubmitContest}>Yes</button>
                        </div>
                    </div>
                </div>
            );
        case CONSTANTS.POPUP_TYPE_INVALID_TEST:
            return(
                <div className='loading'>
                    <div className='exitModel slide-in-right'>
                        <div className='exitQuestion'>{popup.message}</div>
                        <div className='exitOptions'>
                            <button className='exitYes exitButtons' onClick={handleExit}>Ok</button>
                        </div>
                    </div>
                </div>
            )
        default:
            return <></>;
    }
}