import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup, Typography} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import * as ReactDOM from 'react-dom';

const Tracker = (props) => {
    const [cycle, setCycle] = React.useState(4);
    const [symptom, setSymptom] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const [mood, setMood] = React.useState(4);

    const handleCycle = (i) => {
        setCycle(i);
        let arr = [0, 0, 0, 0]
        for (let a = 0; a < 4; a++) {
            if (a == i) {
                arr[a] = 1;
            }
            else {
                arr[a] = 0;
            }
        }
        for (let a = 0; a < 4; a++) {
            let element = document.getElementById("c" + a);
            ReactDOM.findDOMNode(element).style.backgroundColor = arr[a] == 0 ? "lavender" : "#6495ED";
            ReactDOM.findDOMNode(element).style.color = arr[a] == 0 ? "#1976d2" : "lavender";
        }
    };

    const handleSymptom = (i) => {
        // console.log(symptom);
        symptom[i] = (symptom[i] + 1) % 2;
        setSymptom(symptom);
        // let element = document.querySelector('s' + 1);
        let element = document.getElementById("s" + i);
        // console.log(element);
        // console.log(ReactDOM.findDOMNode(element));
        ReactDOM.findDOMNode(element).style.backgroundColor = symptom[i] == 0 ? "lavender" : "#6495ED";
        ReactDOM.findDOMNode(element).style.color = symptom[i] == 0 ? "#1976d2" : "lavender";
        // console.log(symptom);
    };

    const handleMood = (i) => {
        setMood(i);
        let arr = [0, 0, 0, 0]
        for (let a = 0; a < 4; a++) {
            if (a == i) {
                arr[a] = 1;
            }
            else {
                arr[a] = 0;
            }
        }
        for (let a = 0; a < 4; a++) {
            let element = document.getElementById("m" + a);
            ReactDOM.findDOMNode(element).style.backgroundColor = arr[a] == 0 ? "lavender" : "#6495ED";
            ReactDOM.findDOMNode(element).style.color = arr[a] == 0 ? "#1976d2" : "lavender";
        }
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
                <h3 style={{marginBottom: 2}}>Cycle</h3>
                {/*<ButtonGroup size="medium" color="primary" aria-label="large button group">*/}
                {/*<div sx={{margin: '15px'}}>*/}
                    <Button id="c0" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleCycle(0)}}>No Flow</Button>
                    <Button id="c1" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleCycle(1)}}>Light</Button>
                    <Button id="c2" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleCycle(2)}}>Medium</Button>
                    <Button id="c3" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleCycle(3)}}>Heavy</Button>
                {/*</div>*/}
                {/*</ButtonGroup>*/}
                <h3 style={{marginBottom: 2}}>Symptoms</h3>
                {/*<ButtonGroup size="medium" color="primary" aria-label="large button group">*/}
                    <Button id="s0" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(0)}}>Cramps</Button>
                    <Button id="s1" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(1)}}>Headache</Button>
                    <Button id="s2" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(2)}}>Nausea</Button>
                    <Button id="s3" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(3)}}>Soreness</Button>
                    <Button id="s4" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(4)}}>Bloating</Button>
                    <Button id="s5" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(5)}}>Mood Swings</Button>
                    <Button id="s6" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(6)}}>Lower Back Pain</Button>
                    <Button id="s7" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleSymptom(7)}}>Tender Breasts</Button>
                {/*</ButtonGroup>*/}
                <h3 style={{marginBottom: 2}}>Mood</h3>
                {/*<ButtonGroup size="medium" color="primary" aria-label="large button group">*/}
                    <Button id="m0" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleMood(0)}}>Happy</Button>
                    <Button id="m1" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleMood(1)}}>Sad</Button>
                    <Button id="m2" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleMood(2)}}>Irritated</Button>
                    <Button id="m3" variant="outlined" sx={{margin: '5px'}} onClick={() => {handleMood(3)}}>Tired</Button>
                {/*</ButtonGroup>*/}
                <br/>
                <Button variant="contained" sx={{margin: '8px', marginTop: '25px', fontWeight: 'bold'}}>Submit</Button>
                <Button variant="contained" sx={{margin: '8px', marginTop: '25px', fontWeight: 'bold'}}>History</Button>
            </Box>
        </Box>
    );

}

export default Tracker;