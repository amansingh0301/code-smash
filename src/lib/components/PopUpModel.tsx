import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PopUpModelProps {
    removePopUpModel: () => void
    children?: React.ReactNode;
}

export function PopUpModel({removePopUpModel, children}: PopUpModelProps) {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/');
    }

    return (
        <div className='loading' onClick={removePopUpModel}>
            <div className='exitModel slide-in-right'>
                <div className='exitQuestion'>{children}</div>
                <div className='exitOptions'>
                    <button className='exitNo exitButtons' onClick={() => removePopUpModel()}>No</button>
                    <button className='exitYes exitButtons' onClick={handleExit}>Yes</button>
                </div>
            </div>
        </div>
    )
}