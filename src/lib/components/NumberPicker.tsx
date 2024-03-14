import * as React from 'react'
export function NumberPicker(){
    return (
        <div className='picker'>
            <button className='numberPicker'>-</button>
                <input className='questions' type='text' placeholder='10'></input>
            <button className='numberPicker'>+</button>
        </div>
        
    )
}