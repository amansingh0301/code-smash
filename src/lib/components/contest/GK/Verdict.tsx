import React from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../../../store/initialStates';

interface VerdictProps {
    loading: boolean,
    removeVerdict: () => void
}

export function Verdict({loading, removeVerdict}: VerdictProps) {

    const loadingVerdict = useSelector((state: InitialState) => state.app.loadingVerdict);
    const verdict = useSelector((state: InitialState) => state.contestGk.verdict);

    return (
        <>
        {
            loading && 
            <div className='loading' onClick={removeVerdict}>
                {loadingVerdict && <span className="loader"></span>}
                {
                    !loadingVerdict &&
                    <div className='virdict slide-in-right'>
                        {
                            verdict.correct ? 
                            <div className='correct'></div>
                            :
                            <div className='notCorrect'></div>
                        }
                        {!verdict.correct && <div className='correctAnswer'>{verdict.answer}</div>}
                        <div className='explanation'>{verdict.explanation}</div>
                    </div>
                }
            </div>
        }
        </>
    )
}