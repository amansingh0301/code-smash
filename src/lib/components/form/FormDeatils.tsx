import React from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { Input } from './Input';
import { Label } from './Label';
import { NumberPicker } from './NumberPicker';
import { updateMode, updateName } from '../../../store/actions';
import { CONSTANTS } from '../../../utils';

interface FormDeatilsProps {
    nameRef: React.MutableRefObject<null>
}

export function FormDeatils({nameRef}: FormDeatilsProps) {

    const name = useSelector((state: InitialState) => state.form.name);
    const mode = useSelector((state: InitialState) => state.form.mode);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(event.target.value));
    }

    const setPracticeMode = () => {
        dispatch(updateMode(CONSTANTS.PRACTICE))
    }

    const setCompeteMode = () => {
        dispatch(updateMode(CONSTANTS.COMPETE))
    }

    return (
        <div className='formDetails'>
            <div className='contest-type'>
                <div className={`contest-type__practice ${mode === CONSTANTS.PRACTICE ? 'selected-contest-type' : ''}`} onClick={setPracticeMode}>Practice</div>
                <div className={`contest-type__compete ${mode === CONSTANTS.COMPETE ? 'selected-contest-type' : ''}`} onClick={setCompeteMode}>Compete</div>
            </div>
            <Label>Name</Label>
            <Input elementRef={nameRef} type="text" placeHolder="War lord" onChange={handleOnNameChange} value={name}/>
            <Label>Questions</Label>
            <NumberPicker/>
        </div>
    )
}