import React from 'react';
import { Message } from '../../../store/initialStates';

interface InfoMessageProps {
    message: Message
}

export function InfoMessage({message}: InfoMessageProps) {
    return (
        <div className='info-message'>
            {message.text}
        </div>
    )
}