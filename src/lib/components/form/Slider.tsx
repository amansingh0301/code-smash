import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../../store/actions';
import { InitialState } from '../../../store/initialState';

export function  Slider(){
    const time = useSelector((state: InitialState) => state?.form.time);
    const minimumTime = useSelector((state: InitialState) => state?.form.minimumTime);
    const maximumTime = useSelector((state: InitialState) => state?.form.maximumTime);
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        dispatch(updateTime(event.target.value));
    }

  return (
    <div className="range-slider">
        <input className="range-slider__range" type="range" value={time} min={minimumTime} max={maximumTime} onChange={handleChange}/>
        <span className="range-slider__value">{time}</span>
    </div>
  );
}

