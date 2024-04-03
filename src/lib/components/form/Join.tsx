import React, { useEffect, useRef, useState } from 'react';
import { Label } from './Label';
import { Input } from './Input';
import { fetchToken, joinConnection, updateCurrentUser, updateMode, updateName, useConnect } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { InitialState } from '../../../store/initialStates';
import { useNavigate } from 'react-router-dom';

export function Join() {
    const [roomCode, setRoomCode] = useState<string>('');
    const navigate = useNavigate();
    const connect = useConnect();
    const name = useSelector((state: InitialState) => state.form.name);
    const codeRef = useRef(null);
    const nameRef = useRef(null);

    const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

    const handleOnRoomCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomCode(event.target.value.toUpperCase())
    }

    const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(event.target.value));
    }

    useEffect(() => {
        dispatch(updateMode(''));
    },[])

    const handleJoin = async () => {
        if(roomCode.length !== 6){
            if (codeRef.current) {
                const inputElement = codeRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
                setTimeout(() => {
                    inputElement.focus();
                },1000)
            } else {
                console.error('codeRef is not attached to a DOM element yet.');
            }
        }else if(!name.trim()){
            if (nameRef.current) {
                const inputElement = nameRef.current as HTMLInputElement; 
                inputElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' });
                setTimeout(() => {
                    inputElement.focus();
                },1000)
            } else {
                console.error('nameRef is not attached to a DOM element yet.');
            }
        }else {
            connect(dispatch);
            dispatch(updateCurrentUser({
                name,
                score: 0
            }))
            await dispatch(fetchToken());
            localStorage.setItem('roomCode', roomCode);
            dispatch(joinConnection());
            navigate('/lobby');
        }
    }


    return (
        <div className='form slide-in-top'>
                <div className='formDetails'>
                    <Label>Name</Label>
                    <Input elementRef={nameRef} type="text" placeHolder="War Lord" onChange={handleOnNameChange} value={name}/>
                    <Label>Room code</Label>
                    <Input elementRef={codeRef} type="text" placeHolder="X67YHJ" onChange={handleOnRoomCodeChange} value={roomCode}/>
                </div>
                <button className='submit' onClick={handleJoin}>Join</button>
        </div>
    )
}