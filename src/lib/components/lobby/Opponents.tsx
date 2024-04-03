import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { InitialState, Opponent } from '../../../store/initialStates';
import { Person } from './Person';

export function Opponents() {
    const opponents = useSelector((state: InitialState) => state.lobby.opponents);
    const currentUser = useSelector((state: InitialState) => state.lobby.currentUser);

    return (
        <div className='opponents'>
            <Person person={currentUser}/>
            {
                opponents.map((opponent: Opponent) => <Person person={opponent}/>)
            }
        </div>
    )
}