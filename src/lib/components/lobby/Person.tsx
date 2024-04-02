import React from 'react';
import { Opponent } from '../../../store/initialStates';

interface PersonProps {
    person: Opponent;
}

export function Person({person}: PersonProps) {
    return (
        <div className='person'>
            <div className='person-name'>
                {person.name}
            </div>
            <div className='person-status'>
                <p>{person.status}</p>
            </div>
        </div>
    )
}