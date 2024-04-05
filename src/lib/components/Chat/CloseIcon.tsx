import React from 'react'
import { useDispatch } from 'react-redux';
import { updateIsChatOpenState } from '../../../store/actions';

export function CloseIcon() {
    const dispatch = useDispatch();

    const handleChatClose = () => {
        dispatch(updateIsChatOpenState(false));
    }

    return (
        <div className='chat-close-icon' onClick={handleChatClose}>
            <svg className="ionicon" viewBox="0 0 600 600">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
            </svg>
        </div>
    )
}