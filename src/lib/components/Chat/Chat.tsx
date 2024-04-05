import React from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { ChatWindow } from './ChatWindow';
import { ChatIcon } from './ChatIcon';

export function Chat() {

    const isChatOpen = useSelector((state: InitialState) => state.chat.isChatOpen);

    return (
        !isChatOpen 
        ?
         <ChatIcon/> 
        :
        <ChatWindow/>

    )
}