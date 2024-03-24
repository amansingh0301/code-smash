import React, { useState } from 'react';
import { GK, PopUpModel } from '../components';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { Verdict } from '../components/Verdict';
import { CONSTANTS } from '../../utils';

export function Contest() {
    
    const contestType = useSelector((state: InitialState) => state.contest.contestType);
    const [loading, setLoading] = useState(false);
    const [showExitModel, setShowExitModel] = useState(false);
    const [message, setMessage] = useState('Do you want to exit?');
    const [type, setType] = useState(CONSTANTS.POPUP_TYPE_END_TEST);

    const handleRemoveVerdict = () => {
        setLoading(false);
    }

    const handleRemovePopUpModel = () => {
        setShowExitModel(false);
        setMessage('Do you want to exit?');
    }

    const handleEndContest = () => {
        setType(CONSTANTS.POPUP_TYPE_SUBMIT_CONTEST);
        setMessage('Submit?');
        setShowExitModel(true);
    }

    return (
        <>
            {loading && <Verdict loading={loading} removeVerdict={handleRemoveVerdict}/>}
            {showExitModel && <PopUpModel removePopUpModel={handleRemovePopUpModel} type={type}>{message}</PopUpModel>}
            <div className='endContest' onClick={handleEndContest}></div>
            <div className={`contest-page`}>
            { contestType === 'GK' && <GK setLoading={setLoading} setShowExitModel={setShowExitModel}/> }
            </div>
        </>
    )
}

export default React.memo(Contest);