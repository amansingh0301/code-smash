import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsChatOpenState } from '../../../store/actions';


export function ChatIcon() {

    const dispatch = useDispatch();

    const handleOpenChat = () => {
        dispatch(updateIsChatOpenState(true));
    }

    return (
        <div className='chat' onClick={handleOpenChat}>
            <svg className="ionicon" viewBox="0 0 500 500">
                <path id='chatIcon' d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z"/>
                <circle fill='inherit' cx="160" cy="256" r="32"/>
                <circle fill='inherit' cx="256" cy="256" r="32"/>
                <circle fill='inherit' cx="352" cy="256" r="32"/>
            </svg>
        </div>
    )
}