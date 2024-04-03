import React, { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Opponents } from './Opponents';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { sendReadyUpdate, updateCurrentUser, updateOpponentStatus } from '../../../store/actions';
import { InitialState } from '../../../store/initialStates';

export function Lobby() {
    const roomCode = localStorage.getItem('roomCode');
    const currentUser = useSelector((state: InitialState) => state.lobby.currentUser);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
    const [isCopied, setIsCopied] = useState(false);
    const [dots, setDots] = useState('..');
    const handleCopyRoomCode = (event: any) => {
        setIsCopied(true);
        navigator.clipboard.writeText(roomCode as string);
        setTimeout(() => setIsCopied(false), 1500);
    }

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

    return(
        <div className='lobby'>
            <Opponents/>
            <div className='lobby-btn__container'>
                <div className='waiting'>Waiting for others{dots}</div>
                <button className={`lobby-btn ${currentUser.status === 'ready' ? 'not-ready' : 'ready'}`} onClick={handleReady}>{currentUser.status === 'ready' ? 'Not ready?' : 'Ready'}</button>
            </div>
            
            {isCopied ? (
                <div className={`roomcode ${isCopied ? 'copied-notification': ''}`}>
                    <div className='copied'>
                        Copied!
                    </div>
                </div>
                )
                :
                <div className='roomcode' onClick={handleCopyRoomCode}>{roomCode}</div>
            }
        </div>
    )
}