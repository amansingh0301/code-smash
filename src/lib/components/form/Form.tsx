import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { InitialState } from '../../../store/initialStates';
import { fetchToken, invalidateToken, resetContest, resetForm, resetTimer} from '../../../store/actions';
import { Loader } from '..';
import { FormDeatils } from './FormDeatils';
import { Clock } from './Clock';

export function Form() {
    const navigate = useNavigate();
    const name = useSelector((state: InitialState) => state.form.name);
    const toggleLoading = useSelector((state: InitialState) => state.loader.toggleLoading);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
    const nameRef = useRef(null)

    useEffect(() => {
        dispatch(resetContest());
        dispatch(resetTimer());
        dispatch(resetForm());
        dispatch(invalidateToken());
    }, [])

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
            navigate('/contest');
        }
    }
    return (
        <>
            {
            toggleLoading && <Loader/>
            }
            <div className='form slide-in-top'>
                <FormDeatils nameRef={nameRef}/>
                <Clock/>
                <button className='submit' onClick={handleStart}>Start</button>
            </div>
        </>
    )
}

export default React.memo(Form);