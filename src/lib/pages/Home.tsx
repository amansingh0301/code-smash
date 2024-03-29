import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Clock, Form, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { fetchToken, invalidateToken, resetContest } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
export function Home() {
    const navigate = useNavigate();
    const name = useSelector((state: InitialState) => state.form.name);
    const toggleLoading = useSelector((state: InitialState) => state.form.toggleLoading);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
    const nameRef = useRef(null)

    const onPopState = () => {
        navigate('/');
    }
    

    useEffect(() => {
        dispatch(resetContest());
        dispatch(invalidateToken());
        window.addEventListener('popstate', onPopState);

        return () => window.removeEventListener('popstate', onPopState);
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
            <div className='home slide-in-right'>
                <Form nameRef={nameRef}/>
                <Clock/>
                <button className='submit' onClick={handleStart}>Start</button>
            </div>
        </>
    )
}

export default React.memo(Home);