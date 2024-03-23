import React from 'react';
import { Input, Label, NumberPicker } from '.';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../../store/actions';
import { InitialState } from '../../store/initialState';

interface FormProps {
    nameRef: React.MutableRefObject<null>
}

export function Form({nameRef}: FormProps) {

    const name = useSelector((state: InitialState) => state.form.name);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(event.target.value));
    }

    return (
        <div className='form'>
            <Label>Name</Label>
            <Input elementRef={nameRef} type="text" placeHolder="War lord" onChange={handleOnNameChange} value={name}/>
            <Label>Questions</Label>
            <NumberPicker/>
        </div>
    )
}