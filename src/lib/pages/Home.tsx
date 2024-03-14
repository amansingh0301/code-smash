import * as React from 'react';
import { Input, Label } from '../components';
export function Home() {
    return (
        <div className='home'>
            <div className='form'>
                <Label>Name</Label>
                <Input type="text" placeHolder="war lord"/>
                <Label>Difficulty</Label>
            </div>
        </div>
    )
}

export default React.memo(Home);