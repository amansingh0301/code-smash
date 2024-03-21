import React, { useState } from 'react';
import { GK } from '../components';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { Verdict } from '../components/Verdict';
export function Contest() {
    const contestType = useSelector((state: InitialState) => state.contest.contestType);
    const [loading, setLoading] = useState(false);


    const handleRemoveVerdict = () => {
        setLoading(false);
    }
    return (
        <>
            {loading && <Verdict loading={loading} removeVerdict={handleRemoveVerdict}/>}
            <div className='contest-page'>
                { contestType === 'GK' && <GK setLoading={setLoading}/> }
            </div>
        </>
    )
}

export default React.memo(Contest);