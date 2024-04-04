import React, { useEffect, useState } from 'react';
import { sendReadyUpdate, updateCurrentUser } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { ThunkDispatch } from '@reduxjs/toolkit';

export function Readybtn() {

    const [dots, setDots] = useState('..');

    const currentUser = useSelector((state: InitialState) => state.lobby.currentUser);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleReady = () => {
        dispatch(updateCurrentUser({
            status: currentUser.status === 'ready' ? 'joined': 'ready'
        }));
        dispatch(sendReadyUpdate());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevState => prevState.length < 3 ? prevState + '.' : '..');
        },500)

        return () => clearInterval(interval)
    },[])

    return (
        <div className='lobby-btn__container'>
            <div className='waiting'>Waiting for others{dots}</div>
            <button className={`lobby-btn ${currentUser.status === 'ready' ? 'not-ready' : 'ready'}`} onClick={handleReady}>{currentUser.status === 'ready' ? 'Not ready?' : 'Ready'}</button>
        </div>
    )
}