import React from 'react';
import { GK } from '../components';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
export function Contest() {
    const contestType = useSelector((state: InitialState) => state.contest.contestType);
    return (
        <div className='contest-page'>
            { contestType === 'GK' && <GK/> }
        </div>
    )
}

export default React.memo(Contest);