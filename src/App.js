import './App.css';
import Timeline from './Components/Timeline/Timeline.js';
import Background from './Components/Background/Background.js';
import Tracker from './Components/Tracker/Tracker';
import Grid from '@mui/material/Grid';
import FoodList from "./Components/FoodList/FoodList";
import FoodPlaces from "./Components/FoodPlaces/FoodPlaces";
import About from './Components/About/About.js';
import MainLayout from "./Components/MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <Timeline></Timeline>
        <MainLayout></MainLayout>
      <Background></Background>
      <About></About>
    </div>
  );
}

export default App;
