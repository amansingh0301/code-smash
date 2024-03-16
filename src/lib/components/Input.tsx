import * as React from 'react'
type InputProps = {
    elementRef: React.MutableRefObject<null>
    type: string;
    placeHolder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export function Input({elementRef, type, placeHolder, onChange, value}: InputProps) {
    switch (type) {
        case 'text':
            return (
                <input ref={elementRef} className='input' type='text' placeholder={placeHolder} onChange={onChange} value={value}></input>
            )
        default:
            return (
                <input ref={elementRef} className="input" type={type} placeholder={placeHolder} onChange={onChange} value={value}></input>
            )
    }
    
}