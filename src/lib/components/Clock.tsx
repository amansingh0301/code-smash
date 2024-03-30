import React, { useEffect, useRef } from 'react';
import { Slider } from './Slider';
import { InitialState } from '../../store/initialState';
import { useSelector } from 'react-redux';

export function Clock () {
    const time = useSelector((state: InitialState) => state.form.time);
    const elementRef = useRef<SVGPathElement | null>(null); // Explicitly set type

  useEffect(() => {
    if (elementRef.current) {
      const tipX = (elementRef.current as SVGPathElement).getBBox().x +
                  (elementRef.current as SVGPathElement).getBBox().width / 2;
      const tipY = (elementRef.current as SVGPathElement).getBBox().y +
                  (elementRef.current as SVGPathElement).getBBox().height;

      elementRef.current.style.transformOrigin = `${tipX}px ${tipY}px`;
      elementRef.current.style.transform = `rotate(${time*6}deg)`;
    }
  }, [elementRef,time ]);

  return (
    <div className='time-selector'>
        <svg className='clock' viewBox="0 0 1000 1000">
            <path id="watch" d="M978,500c0,263.99-214.01,478-478,478s-478-214.01-478-478,214.01-478,478-478,478,214.01,478,478zm-888.93,237.25,20.179-11.65m779.16-449.85l22.517-13m-648.18,648.18,11.65-20.18m449.85-779.16l13-22.517m-711.75,410.93h23.305m899.7,0h26m-885.43-237.25,20.179,11.65m779.16,449.85,22.517,13m-648.18-648.18l11.652,20.183m449.85,779.16,13,22.517m-237.25-885.43v23.305m0,899.7,0,26"/>
            <path ref={elementRef} d="M500,500,500,150" id="sec" />
        </svg>
        <Slider/>
    </div>
  )
};