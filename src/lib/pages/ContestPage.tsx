import React from 'react';
import { Contest } from '../components';
import { Progress, Timer } from '../components/timer';

export function ContestPage() {
    return (
        <>
            <Contest/>
            <Timer/>
            <Progress/>
        </>
    )
}

export default React.memo(ContestPage);