import React, { useState } from 'react';
import { ExitModel, GK } from '../components';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { Verdict } from '../components/Verdict';
export function Contest() {
    const contestType = useSelector((state: InitialState) => state.contest.contestType);
    const [loading, setLoading] = useState(false);
    const [showExitModel, setShowExitModel] = useState(false);

    const handleRemoveVerdict = () => {
        setLoading(false);
    }

    const handleRemoveExitMoel = () => {
        setShowExitModel(false);
    }
    return (
        <>
            {loading && <Verdict loading={loading} removeVerdict={handleRemoveVerdict}/>}
            {showExitModel && <ExitModel removeExitModel={handleRemoveExitMoel}/>}
            <div className='contest-page'>
                { contestType === 'GK' && <GK setLoading={setLoading} setShowExitModel={setShowExitModel}/> }
            </div>
        </>
    )
}

export default React.memo(Contest);