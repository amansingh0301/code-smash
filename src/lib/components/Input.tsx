import * as React from 'react'
type InputProps = {
    type: string;
    placeHolder: string;
}

export function Input({type, placeHolder}: InputProps) {
    switch (type) {
        case 'text':
            return (
                <input className='input' type='text' placeholder={placeHolder}></input>
            )
        default:
            return (
                <input className="input" type={type} placeholder={placeHolder}></input>
            )
    }
    
}