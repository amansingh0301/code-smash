import React from 'react'
import { useSelector } from 'react-redux';
import { InitialState, Opponent } from '../../../store/initialStates';
import { Person } from './Person';

export function Opponents() {
    const opponents = useSelector((state: InitialState) => state.lobby.opponents);
    return (
        <div className='opponents'>
            {
                opponents.map((opponent: Opponent) => <Person person={opponent}/>)
            }
        </div>
    )
}