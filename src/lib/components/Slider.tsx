import * as React from 'react';
import { useState } from 'react';

export function  Slider(){
    const [time, setTime] = useState(10);

    const handleChange = (event: any) => {
        setTime(event.target.value);
    }

  return (
    <div className="range-slider">
        <input className="range-slider__range" type="range" value={time} min="5" max="60" onChange={handleChange}/>
        <span className="range-slider__value">{time}</span>
    </div>
  );
};

