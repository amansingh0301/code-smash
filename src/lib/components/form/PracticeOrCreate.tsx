import React, { useRef } from 'react';
import { FormDeatils } from './FormDeatils';
import { Clock } from './Clock';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchToken } from '../../../store/actions';
import { CONSTANTS } from '../../../utils';

export function PracticeOrCreate() {

    const navigate = useNavigate();
    const name = useSelector((state: InitialState) => state.form.name);
    const mode = useSelector((state: InitialState) => state.form.mode);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
    const nameRef = useRef(null)

    const handleStart = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!name.trim()){
            if (nameRef.current) {
                const inputElement = nameRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
                setTimeout(() => {
                    inputElement.focus();
                },1000)
            } else {
                console.error('nameRef is not attached to a DOM element yet.');
            }
        }else{
            await dispatch(fetchToken());
            if(mode === CONSTANTS.PRACTICE)
                navigate('/contest');
            else
                navigate('/lobby');
        }
    }
    return (
        <div className='form slide-in-top'>
                <FormDeatils nameRef={nameRef}/>
                <Clock/>
                <button className='submit' onClick={handleStart}>Start</button>
        </div>
    )
}