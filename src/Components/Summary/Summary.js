import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

const Summary = (props) => {

    let divider;
    if (props.phase == 1) {
        divider = <div>
            <h1>Menstrual phase</h1>
            <h5>(typically 3-7 days)</h5>
        </div>;
    }
    else if (props.phase == 2) {
        divider = <div>
            <h1>Follicular phase</h1>
            <h5>(typically 11-27 days overlaps with menstrual phase)</h5>
        </div>;
    }
    else if (props.phase == 3) {
        divider = <div>
            <h1>Ovulation phase</h1>
            <h5>(typically 1 day, (commonly half way through the cycle))</h5>
        </div>;
    }
    else if (props.phase == 4) {
        divider = <div>
            <h1>Luteal phase</h1>
            <h5>(typically 11-17 days)</h5>
        </div>;
    }

    return (
        <div style={{marginTop: '70px'}}>
            {/*<p>Summary</p>*/}
            {divider}
        </div>

    );

}

export default Summary;