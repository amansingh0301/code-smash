import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { InitialState } from '../../../store/initialStates';
import { fetchToken, invalidateToken, resetContest, resetForm, resetTimer} from '../../../store/actions';
import { Loader } from '..';
import { FormDeatils } from './FormDeatils';
import { Clock } from './Clock';
import { CONSTANTS } from '../../../utils';
import { PracticeOrCreate } from './PracticeOrCreate';
import { Join } from './Join';

export function Form() {
    const toggleLoading = useSelector((state: InitialState) => state.loader.toggleLoading);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
    const [type, setType] = useState('Join');

    const handleSelectType = () => {
        console.log(type)
        if(type.toLowerCase() === 'create')
            setType('Join');
        else
            setType('Create');
    }

    useEffect(() => {
        dispatch(resetContest());
        dispatch(resetTimer());
        dispatch(resetForm());
        dispatch(invalidateToken());
    }, [])
    return (
        <div className='form-wrapper'>
            <button className='create-join-btn' onClick={handleSelectType}>{type}</button>
            {
            toggleLoading && <Loader/>
            }
            {
                type.toLowerCase() !== 'create' ?
                <PracticeOrCreate/>
                :
                <Join/>
            }
            
        </div>
    )
}

export default React.memo(Form);