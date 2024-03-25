import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../utils';
import { submitContest } from '../../store/actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

interface PopUpModelProps {
    removePopUpModel?: () => void;
    type: string;
    children?: React.ReactNode;
}

export function PopUpModel({removePopUpModel, type,children}: PopUpModelProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleExit = () => {
        navigate('/');
    }

    const handleSubmitContest = () => {
        dispatch(submitContest());
        navigate('/result');
    }

    switch(type) {
        case CONSTANTS.POPUP_TYPE_END_TEST:
            return(
                <div className='loading' onClick={removePopUpModel}>
                    <div className='exitModel slide-in-right'>
                        <div className='exitQuestion'>{children}</div>
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
                        <div className='exitQuestion'>{children}</div>
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
                        <div className='exitQuestion'>{children}</div>
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