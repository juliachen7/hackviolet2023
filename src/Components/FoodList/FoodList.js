import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

const FoodList = (props) => {
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
        height: '18rem',
        // marginRight: 2
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
                <h3>Food List</h3>
            </Box>
        </Box>
    );

}

export default FoodList;