import React from 'react';
import { Opponent } from '../../../store/initialStates';

interface PersonProps {
    person: Opponent;
}

export function Person({person}: PersonProps) {
    return (
        <div className={`person ${person.status === 'ready' ? 'person-ready' : ''}`}>
            <div className='person-name'>
                {person.name}
            </div>
        </div>
    )
}