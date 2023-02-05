import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup} from "@mui/material";
import { createTheme } from '@mui/material/styles';

const Tracker = (props) => {
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
                    <Button variant="outlined" sx={{margin: '5px'}}>Cramps</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Headache</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Nausea</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Soreness</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Bloating</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Mood Swings</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Lower Back Pain</Button>
                    <Button variant="outlined" sx={{margin: '5px'}}>Tender Breasts</Button>
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