import React, { MouseEvent, MouseEventHandler, useRef, useState } from 'react';
import { Opponents } from './Opponents';

export function Lobby() {
    const roomCode = localStorage.getItem('roomCode');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyRoomCode = (event: any) => {
        setIsCopied(true);
        navigator.clipboard.writeText(roomCode as string);
        setTimeout(() => setIsCopied(false), 1500);
    }
    return(
        <div className='lobby'>
            <Opponents/>
            
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