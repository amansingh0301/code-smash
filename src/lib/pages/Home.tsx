import * as React from 'react';
import { Clock, Input, Label, NumberPicker } from '../components';
export function Home() {
    return (
        <div className='home'>
            <div className='form'>
                <Label>Name</Label>
                <Input type="text" placeHolder="War lord"/>
                <Label>Questions</Label>
                <NumberPicker/>
            </div>
            <Clock/>
            {/* <button>Submit</button> */}
        </div>
    )
}

export default React.memo(Home);