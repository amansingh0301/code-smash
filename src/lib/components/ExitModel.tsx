import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { useNavigate } from 'react-router-dom';

interface ExitModelProps {
    removeExitModel: () => void
}

export function ExitModel({removeExitModel}: ExitModelProps) {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/');
    }

    return (
        <div className='loading' onClick={removeExitModel}>
            <div className='exitModel'>
                <div className='exitQuestion'>Do you want to exit?</div>
                <div className='exitOptions'>
                    <button className='exitNo exitButtons' onClick={() => removeExitModel()}>No</button>
                    <button className='exitYes exitButtons' onClick={handleExit}>Yes</button>
                </div>
            </div>
        </div>
    )
}