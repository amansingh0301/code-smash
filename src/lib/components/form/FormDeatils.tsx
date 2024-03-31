import React from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../../store/initialStates';
import { Input } from './Input';
import { Label } from './Label';
import { NumberPicker } from './NumberPicker';
import { updateName } from '../../../store/actions';

interface FormDeatilsProps {
    nameRef: React.MutableRefObject<null>
}

export function FormDeatils({nameRef}: FormDeatilsProps) {

    const name = useSelector((state: InitialState) => state.form.name);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(event.target.value));
    }

    return (
        <div className='formDetails'>
            <Label>Name</Label>
            <Input elementRef={nameRef} type="text" placeHolder="War lord" onChange={handleOnNameChange} value={name}/>
            <Label>Questions</Label>
            <NumberPicker/>
        </div>
    )
}