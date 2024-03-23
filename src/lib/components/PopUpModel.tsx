import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../utils';

interface PopUpModelProps {
    removePopUpModel?: () => void;
    type: string;
    children?: React.ReactNode;
}

export function PopUpModel({removePopUpModel, type,children}: PopUpModelProps) {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/');
    }

    switch(type) {
        case CONSTANTS.POPUP_TYPE_END_TEST:
        case CONSTANTS.POPUP_TYPE_SUBMIT_CONTEST:
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
    }

    return 
}