import './App.css';
import Timeline from './Components/Timeline/Timeline.js';
import Background from './Components/Background/Background.js';
import Tracker from './Components/Tracker/Tracker';
import Grid from '@mui/material/Grid';
import FoodList from "./Components/FoodList/FoodList";
import FoodPlaces from "./Components/FoodPlaces/FoodPlaces";
import About from './Components/About/About.js';
import Name from './Components/Name/Name.js';
import Features from './Components/Features/Features.js'
import MainLayout from "./Components/MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <Timeline></Timeline>
      {/*<About></About>*/}
      {/*<Name></Name>*/}
      <MainLayout></MainLayout>
      <Background></Background>
    </div>
  );
}

export default App;
