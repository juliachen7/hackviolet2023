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

    let divider;
    if (props.phase == 1) {
        divider = <div>
            <ul>
                <li>Dark Leafy Greens</li>
                <li>Bananas</li>
                <li>Avocados</li>
                <li>Seaweed</li>
            </ul>
        </div>;
    }
    else if (props.phase == 2) {
        divider = <div>
            <ul>
                <li>Mixture of cooked and raw foods</li>
            </ul>
        </div>;
    }
    else if (props.phase == 3) {
        divider = <div>
            <ul>
                <li>Less carbs & sugars</li>
                <li>More lean protein</li>
            </ul>
        </div>;
    }
    else if (props.phase == 4) {
        divider = <div>
            <ul>
                <li>Oily fish</li>
                <li>Protein</li>
                <li>Healthy fat</li>
                <li>Ginger</li>
                <li>Avoid caffeine</li>
            </ul>
        </div>;
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
                <h3>Food Recommendations</h3>
                {divider}
            </Box>
        </Box>
    );

}

export default FoodList;