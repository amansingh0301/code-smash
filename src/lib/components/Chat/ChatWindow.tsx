import React, { useEffect, useState } from 'react'
import { ChatHeader } from './ChatHeader'
import { useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { ChatConsole } from './ChatConsole';
import { ChatHistory } from './ChatHistory';

export function ChatWindow() {

    const isChatOpen = useSelector((state: InitialState) => state.chat.isChatOpen);
    const [open ,setOpen] = useState(false);

    useEffect(() => {
        setOpen(isChatOpen);
    },[isChatOpen])


    return(
        <div className={`chat-window ${open ? 'visible': ''}`}>
            <ChatHeader/>
            <ChatHistory/>
            <ChatConsole/>
        </div>
    )
}