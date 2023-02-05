import './App.css';
import Timeline from './Components/Timeline/Timeline.js';
import Background from './Components/Background/Background.js';
import Tracker from './Components/Tracker/Tracker';
import Grid from '@mui/material/Grid';
import FoodList from "./Components/FoodList/FoodList";
import FoodPlaces from "./Components/FoodPlaces/FoodPlaces";
import About from './Components/About/About.js';

function App() {
  return (
    <div className="App">
      <Timeline></Timeline>
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
      <Background></Background>
      <About></About>
    </div>
  );
}

export default App;
