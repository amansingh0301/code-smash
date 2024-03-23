import React, { Dispatch, SetStateAction } from 'react';
import { GKContestButtons, GKQuestion } from '.';

interface GKprops {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setShowExitModel: Dispatch<SetStateAction<boolean>>
}

export function GK( { setLoading, setShowExitModel }: GKprops) {
    
    return (
        <div className='GK slide-in-right'>
            <GKQuestion/>
            <GKContestButtons setLoading={setLoading} setShowExitModel={setShowExitModel}/>
        </div>

    )
}