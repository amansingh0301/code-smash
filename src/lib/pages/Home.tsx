import * as React from 'react';
import { useRef } from 'react';
import { Clock, Input, Label, NumberPicker } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { fetchToken, updateName } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
export function Home() {
    const navigate = useNavigate();
    const name = useSelector((state: InitialState) => state.form.name);
    const toggleLoading = useSelector((state: InitialState) => state.form.toggleLoading);
    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
    const nameRef = useRef(null)
    const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(event.target.value));
    }

    const handleStart = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!name.trim()){
            if (nameRef.current) {
                const inputElement = nameRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
                setTimeout(() => {
                    inputElement.focus();
                },1000)
            } else {
                console.error('nameRef is not attached to a DOM element yet.');
            }
        }else{
            await dispatch(fetchToken());
            navigate('/contest');
        }
    }
    return (
        <div className='home'>
            {
            toggleLoading && 
            <div className='loading'>
                <span className="loader"></span>
            </div>
            }
            <div className='form'>
                <Label>Name</Label>
                <Input elementRef={nameRef} type="text" placeHolder="War lord" onChange={handleOnNameChange} value={name}/>
                <Label>Questions</Label>
                <NumberPicker/>
            </div>
            <Clock/>
                <button className='submit' onClick={handleStart}>Start</button>
            {/* </Link> */}
        </div>
    )
}

export default React.memo(Home);