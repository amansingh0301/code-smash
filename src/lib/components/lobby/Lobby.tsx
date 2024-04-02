import React from 'react';
import { useSelector } from 'react-redux';
import { InitialState, Opponent } from '../../../store/initialStates';
import { Opponents } from './Opponents';

export function Lobby() {
    
    return(
        <div className='lobby'>
            {
                <Opponents/>
            }
        </div>
    )
}