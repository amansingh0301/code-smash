import React from 'react';
import { Message } from '../../store/initialStates';
import { InfoMessage, Message as MessageComopnent } from './Chat';

interface ComponentMapProps {
    message: Message
}

export function ComponentMap({message}: ComponentMapProps) {
    switch(message.type){
        case 'message':
            return <MessageComopnent message={message}/>
        case 'infoMessage':
            return <InfoMessage message={message}/>
        default:
            return <></>
    }
}