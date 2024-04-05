import React, { useEffect, useRef, useState } from 'react';
import { InitialState, Message as MessageModel } from '../../../store/initialStates';
import { useSelector } from 'react-redux';
import { getCurrentUserName, getNameFromOpponentList } from '../../../utils';
import { PointyIcon } from './PointyIcon';

interface MessageProps {
    message: MessageModel,
    type: string
}

export function Message({message, type}: MessageProps) {

    const messageRef = useRef(null);
    const opponents = useSelector((state: InitialState) => state.lobby.opponents);
    const currentUser = useSelector((state: InitialState) => state.lobby.currentUser);

    const [name, setName] = useState<string | undefined>('');

    useEffect(() => {
        if (messageRef.current) {
            const inputElement = messageRef.current as HTMLInputElement; 
            inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
            setTimeout(() => {
                inputElement.focus();
            },1000)
        }

        if(type === 'opponent-message')
            setName(getNameFromOpponentList(opponents, message.userId));
        else
            setName(getCurrentUserName(currentUser));
    },[])

    return (
        <>
            <div className={`message`} key={message.userId}>
                {
                    type !== 'opponent-message' ?
                    <>
                        <div className={`${type}`}>
                            {message.text}
                        </div>
                        <PointyIcon className='pointyIconRight'/>
                        <div className='person-icon'>{name?.charAt(0)?.toUpperCase()}{name?.charAt(1)?.toUpperCase()}</div>
                    </>
                    :
                    <>
                        <div className='person-icon'>{name?.charAt(0)?.toUpperCase()}{name?.charAt(1)?.toUpperCase()}</div>
                        <PointyIcon className='pointyIconLeft'/>
                        <div className={`${type}`}>
                            {message.text}
                        </div>
                    </>
                }
            </div>
            <div ref={messageRef}></div>
        </>
    )
}