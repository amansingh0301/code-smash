import React from 'react';
import { Opponents } from './Opponents';
import { ChatIcon } from './ChatIcon';
import { Readybtn } from './Readybtn';
import { RoomCode } from './RoomCode';

export function Lobby() {
    

    return(
        <div className='lobby'>
            <Opponents/>
            <Readybtn />
            <ChatIcon/>
            <RoomCode/>
        </div>
    )
}