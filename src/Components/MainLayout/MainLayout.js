import * as React from 'react';
import Grid from "@mui/material/Grid";
import FoodList from "../FoodList/FoodList";
import FoodPlaces from "../FoodPlaces/FoodPlaces";
import Tracker from "../Tracker/Tracker";

const MainLayout = (props) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={5} md={5}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={12}>
                        <FoodList></FoodList>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FoodPlaces></FoodPlaces>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} md={2}>
                <p>Summary</p>
            </Grid>
            <Grid item xs={5} md={5}>
                <Tracker></Tracker>
            </Grid>
        </Grid>
    );

}

export default MainLayout;