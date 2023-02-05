import './App.css';

// import {ReactComponent as PlusIcon } from './Icons/plus.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js"
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}