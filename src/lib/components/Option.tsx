import React, { Dispatch, SetStateAction } from 'react';

interface OptionProp {
    option: string;
    selectedOption: string;
    selectOption: (option: string) => void,
}

export function Option({ option, selectedOption, selectOption} : OptionProp) {
    return (
        <div className='questionOptions slide-in-right' key={option} onClick={() => {selectOption(option)}}>
            <input type='radio' value={option} checked={selectedOption === option}></input>
            <div className='radioDiv'>
                <span className="radio-button"></span>
            </div>
            {option}
        </div>
    )
}