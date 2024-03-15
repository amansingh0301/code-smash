import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { updateTime } from '../../store/actions';

export function  Slider(){
    const time = useSelector((state: InitialState) => state.form.time);
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        dispatch(updateTime(event.target.value));
    }

  return (
    <div className="range-slider">
        <input className="range-slider__range" type="range" value={time} min="5" max="60" onChange={handleChange}/>
        <span className="range-slider__value">{time}</span>
    </div>
  );
};

