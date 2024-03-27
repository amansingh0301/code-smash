import React, { useEffect, useState } from 'react';
import { GK, PopUpModel } from '../components';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { Verdict } from '../components/Verdict';
import { CONSTANTS } from '../../utils';
import { useNavigate } from 'react-router-dom';

export function Contest() {
    const navigate = useNavigate();
    
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

    const handleInvalidTest = () => {
        setType(CONSTANTS.POPUP_TYPE_INVALID_TEST);
        setMessage('Not Valid! Go to home page')
        setShowExitModel(true);
    }

    const onPopState = () => {
        navigate('/');
    }

    useEffect(() => {
        window.addEventListener('popstate', onPopState);

        return () => window.removeEventListener('popstate', onPopState);
    },[])

    return (
        <>
            {loading && <Verdict loading={loading} removeVerdict={handleRemoveVerdict}/>}
            {showExitModel && <PopUpModel removePopUpModel={handleRemovePopUpModel} type={type}>{message}</PopUpModel>}
            <div className='endContest' onClick={handleEndContest}></div>
            <div className={`contest-page`}>
            { contestType === 'GK' && <GK setLoading={setLoading} setShowExitModel={setShowExitModel} handleInvalidTest={handleInvalidTest}/> }
            </div>
        </>
    )
}

export default React.memo(Contest);