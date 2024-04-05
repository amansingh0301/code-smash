import React, { ChangeEvent } from 'react';
import { SendButton } from './SendButton';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { sendMessage, updateCurrentUserMessage } from '../../../store/actions';
import { InitialState } from '../../../store/initialStates';

export function ChatConsole() {

    const currentUser = useSelector((state: InitialState) => state.lobby.currentUser);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateCurrentUserMessage(event.target.value));
    }

    const sendMessageClick = () => {
        if(currentUser.message?.trim()){
            const textArea = document.querySelector(".textArea") as HTMLTextAreaElement;
            textArea.value = "";

            dispatch(sendMessage())
            setTimeout(() => {
                dispatch(updateCurrentUserMessage(''));
            }, 500);
        }
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