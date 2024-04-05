import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { InitialState } from '../../../store/initialStates'
import { ComponentMap } from '../ComponentMap';

export function ChatHistory() {

    const messages = useSelector((state: InitialState) => state.chat.messages);

    return (
        <div className='chat-history'>
            {
                messages && messages.map((message) => <ComponentMap message={message}/>)
            }
        </div>
    )
}