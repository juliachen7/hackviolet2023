import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

const FoodPlaces = (props) => {
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
                <li>Chicken Cobb w/ Avocados @ABP</li>
                <li>Sushi @Origami</li>
                <li>Bananas @any dining hall</li>
            </ul>
        </div>;
    }
    else if (props.phase == 2) {
        divider = <div>
            <ul>
                <li>Chicken no rice w/ Guac @Qdoba</li>
                <li>Nut mix @Owens</li>
                <li>London Broil w/ gravy @West End</li>
            </ul>
        </div>;
    }
    else if (props.phase == 3) {
        divider = <div>
            <ul>
                <li>Berries @Ho Grill</li>
                <li>Nut Mix @Owens</li>
                <li>Broccoli @Dish</li>
            </ul>
        </div>;
    }
    else if (props.phase == 4) {
        divider = <div>
            <ul>
                <li>Salmon avocado roll @Origami eat ginger</li>
                <li>Chicken Bacon Avocado Sandwich @Burger’37</li>
                <li>Old bay fried catfish @Lavery</li>
            </ul>
        </div>;
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
                <h3>Food Places</h3>
                {divider}
            </Box>
        </Box>
    );

}

export default FoodPlaces;