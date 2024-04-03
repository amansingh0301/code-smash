import React, { useRef, useState } from 'react';
import { Label } from './Label';
import { Input } from './Input';

export function Join() {
    const [roomCode, setRoomCode] = useState<string>('');
    const codeRef = useRef(null)

    const handleOnRoomCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomCode(event.target.value.toUpperCase())
    }

    const handleJoin = () => {
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
        }else {
            localStorage.setItem('roomCode', roomCode);
            
        }
    }


    return (
        <div className='form slide-in-top'>
                <div className='formDetails'>
                    <Label>Room code</Label>
                    <Input elementRef={codeRef} type="text" placeHolder="X67YHJ" onChange={handleOnRoomCodeChange} value={roomCode}/>
                </div>
                <button className='submit' onClick={handleJoin}>Join</button>
        </div>
    )
}