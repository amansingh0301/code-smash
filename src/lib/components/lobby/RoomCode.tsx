import React, { useState } from 'react';

export function RoomCode() {
    const roomCode = localStorage.getItem('roomCode');
    const [isCopied, setIsCopied] = useState(false);
    
    const handleCopyRoomCode = (event: any) => {
        setIsCopied(true);
        navigator.clipboard.writeText(roomCode as string);
        setTimeout(() => setIsCopied(false), 1500);
    }

    return (
        isCopied ? (
            <div className={`roomcode ${isCopied ? 'copied-notification': ''}`}>
                <div className='copied'>
                    Copied!
                </div>
            </div>
            )
            :
            <div className='roomcode' onClick={handleCopyRoomCode}>{roomCode}</div>
    )
}