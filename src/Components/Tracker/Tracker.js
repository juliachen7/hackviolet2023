import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import * as ReactDOM from 'react-dom';

const Tracker = (props) => {
    const [symptom, setSymptom] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);

    const handleSymptom = (i) => {
        console.log(symptom);
        symptom[i] = (symptom[i] + 1) % 2;
        setSymptom(symptom);
        // let element = document.querySelector('s' + 1);
        let element = document.getElementById("s" + i);
        ReactDOM.findDOMNode(element).variant = symptom[i] == 0 ? "outlined" : "contained";
        console.log(symptom);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
        },
    });

    // from mui docs
    const commonStyles = {
        // bgcolor: 'background.paper',
        bgcolor: 'lavender',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '30rem',
        height: '32rem',
        // marginRight: 2
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
                <h2>How are you feeling today?</h2>
                <h3>Cycle</h3>
                {/*<ButtonGroup size="medium" color="primary" aria-label="large button group">*/}
                <div sx={{margin: '15px'}}>
                    <Button variant="outlined" sx={{margin: '5px'}}>No Flow</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Light</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Medium</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Heavy</Button>
                </div>
                {/*</ButtonGroup>*/}
                <h3>Symptoms</h3>
                {/*<ButtonGroup size="medium" color="primary" aria-label="large button group">*/}
                    <Button id="s0" variant={symptom[0] == 0 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(0)}}>Cramps</Button>
                    <Button id="s1" variant={symptom[1] == 1 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(1)}}>Headache</Button>
                    <Button id="s2" variant={symptom[2] == 2 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(2)}}>Nausea</Button>
                    <Button id="s3" variant={symptom[3] == 3 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(3)}}>Soreness</Button>
                    <Button id="s4" variant={symptom[4] == 4 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(4)}}>Bloating</Button>
                    <Button id="s5" variant={symptom[5] == 5 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(5)}}>Mood Swings</Button>
                    <Button id="s6" variant={symptom[6] == 6 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(6)}}>Lower Back Pain</Button>
                    <Button id="s7" variant={symptom[7] == 7 ? "outlined" : "contained"} sx={{margin: '5px'}} onClick={() => {handleSymptom(7)}}>Tender Breasts</Button>
                {/*</ButtonGroup>*/}
                <h3>Mood</h3>
                {/*<ButtonGroup size="medium" color="primary" aria-label="large button group">*/}
                    <Button variant="outlined" sx={{margin: '5px'}}>Happy</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Sad</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Irritated</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Tired</Button>
                {/*</ButtonGroup>*/}
            </Box>
        </Box>
    );

}

export default Tracker;