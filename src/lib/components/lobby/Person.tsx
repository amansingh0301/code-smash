import React, { useState } from 'react';
import { Opponent } from '../../../store/initialStates';

interface PersonProps {
    person?: Opponent;
}

export function Person({person}: PersonProps) {
    const [flipped, setFlipped] = useState(false);

    const flip = () => {
        setFlipped(!flipped);
    }
    return (
        <div className={`person ${person?.status === 'ready' ? 'person-ready' : ''} ${flipped ? 'person-flip' : ''}`} onClick={flip} onMouseEnter={flip} onMouseLeave={() => setFlipped(false)}>
            {
                !flipped ? 
                <div className='person-name'>
                    {person?.name}
                </div>
                :
                <div className='person-back'>
                    <div className="person-back-content">
                        {person?.userId}
                    </div>
                </div>
            }
        </div>
    )
}