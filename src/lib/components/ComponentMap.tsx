import React from 'react';
import { Message } from '../../store/initialStates';
import { InfoMessage, Message as MessageComopnent } from './Chat';

interface ComponentMapProps {
    message: Message
}

export function ComponentMap({message}: ComponentMapProps) {
    switch(message.type){
        case 'message':
            return <MessageComopnent message={message} type='opponent-message'/>
        case 'infoMessage':
            return <InfoMessage message={message}/>
        case 'userMessage':
            return <MessageComopnent message={message} type='user-message'/>
        default:
            return <></>
    }
}