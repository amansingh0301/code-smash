import React from 'react';
import { SendButton } from './SendButton';

export function ChatConsole() {
    return (
        <div className='chat-console'>
            <div className='textAreaWrapper'>
                <textarea className='textArea' placeholder='Message' required/>
            </div>
            <SendButton/>
        </div>
    )
}