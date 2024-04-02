import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { InitialState, Opponent } from '../../../store/initialStates';
import { Person } from './Person';

export function Opponents() {
    const opponents = useSelector((state: InitialState) => state.lobby.opponents);
    const name = useSelector((state: InitialState) => state.form.name);
    const [self, setSelf] = useState<Opponent | undefined>(undefined);

    useEffect(() => {
        const person: Opponent = {
            userId: localStorage.getItem('userId') as string,
            name,
            status: 'joined',
            score: 0
        }

        setSelf(person);
    },[])
    return (
        <div className='opponents'>
            <Person person={self}/>
            {
                opponents.map((opponent: Opponent) => <Person person={opponent}/>)
            }
        </div>
    )
}