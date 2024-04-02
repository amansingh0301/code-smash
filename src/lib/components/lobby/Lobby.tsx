import React from 'react';
import { Opponents } from './Opponents';

export function Lobby() {
    const roomCode = localStorage.getItem('roomCode');
    return(
        <div className='lobby'>
            <Opponents/>
            <div className='roomcode'>{roomCode}</div>
        </div>
    )
}