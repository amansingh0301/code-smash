import React, { useEffect, useRef } from 'react';
import { Message as MessageModel } from '../../../store/initialStates';

interface MessageProps {
    message: MessageModel
}

export function Message({message}: MessageProps) {

    const messageRef = useRef(null);

    useEffect(() => {
        if (messageRef.current) {
            const inputElement = messageRef.current as HTMLInputElement; 
            inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
            setTimeout(() => {
                inputElement.focus();
            },1000)
        }
    },[])

    return (
        <>
            <div className='message'>
                {message.text}
            </div>
            <div ref={messageRef}></div>
        </>
    )
}