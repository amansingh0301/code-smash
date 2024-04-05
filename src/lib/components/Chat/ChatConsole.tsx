import React, { ChangeEvent } from 'react';
import { SendButton } from './SendButton';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { sendMessage, updateCurrentUserMessage } from '../../../store/actions';

export function ChatConsole() {

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateCurrentUserMessage(event.target.value));
    }

    const sendMessageClick = () => {
        dispatch(sendMessage())
    }

    return (
        <div className='chat-console'>
            <div className='textAreaWrapper'>
                <textarea className='textArea' placeholder='Message' required onChange={onMessageChange}/>
            </div>
            <SendButton sendMessage={sendMessageClick}/>
        </div>
    )
}