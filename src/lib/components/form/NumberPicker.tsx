import * as React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialState } from '../../../store/initialStates'
import { updateNoOfQuestions } from '../../../store/actions';
export function NumberPicker(){
    const [minusDisable, setMinusDisable] = useState(false);
    const [plusDisable, setPlusDisable] = useState(false);
    const noOfQuestions = useSelector((state: InitialState) => state.form.questions);
    const maxNoOfQuestions = useSelector((state: InitialState) => state.form.maxQuestions);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(noOfQuestions === 1){
            setMinusDisable(true);
        }
        else if(noOfQuestions === maxNoOfQuestions){
            setPlusDisable(true);
        }else{
            setMinusDisable(false);
            setPlusDisable(false);
        }
    }, [noOfQuestions])

    const decreaseNumberOfQuestions = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(noOfQuestions > 1)
            dispatch(updateNoOfQuestions(noOfQuestions-1));
    }

    const increaseNumberOfQuestions = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(noOfQuestions < maxNoOfQuestions)
            dispatch(updateNoOfQuestions(noOfQuestions+1));
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (newValue >= 1 && newValue <= maxNoOfQuestions) {
          dispatch(updateNoOfQuestions(newValue));
        }else{
            dispatch(updateNoOfQuestions(0))
        }
      };
    return (
        <div className='picker'>
            <button className='numberPicker' onClick={decreaseNumberOfQuestions} disabled={minusDisable}>-</button>
                <input className='questions' type='text' placeholder='10' value={noOfQuestions} onChange={handleChange}></input>
            <button className='numberPicker' onClick={increaseNumberOfQuestions} disabled={plusDisable}>+</button>
        </div>
        
    )
}