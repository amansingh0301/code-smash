import * as React from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
export function Result() {
    const currentPath = window.location.pathname;
    const result = useSelector((state: InitialState) => state.contest.result);
    return (
        <div className='result slide-in-right'>
            correct: {result.result.correct} un-attempted: {result.result.unAttempted} incorrect: {result.result.inCorrect} 
        </div>
    )
}