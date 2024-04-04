import React from 'react';
import { Opponents } from './Opponents';
import { Chat } from './Chat';
import { Readybtn } from './Readybtn';
import { RoomCode } from './RoomCode';

export function Lobby() {
    

    return(
        <div className='lobby'>
            <Opponents/>
            <Readybtn />
            <Chat/>
            <RoomCode/>
        </div>
    )
}