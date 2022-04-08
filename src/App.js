
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { useState } from 'react';
// import axios from 'axios';
import { Home } from './Pages/Home/Home';
// import { QuizPage } from './Pages/QuizPage/Quiz';
import WeatherApp from './Pages/Weather/Weather';
import { Dictionary } from './Pages/Dictionary/Dictionary';
import { Game } from './Pages/Game/Game';
import Quiz from './Pages/QuizPage/Quiz-Pages/QuizPage';

function App() {
  return (
    
    <BrowserRouter>
    <div className="app" style={{backgroundImage: "url(./Damask.jpg)"}}>
    
    {/* <Header/> */}
    <Routes>
    <Route path="/"
      element={<Home />}>
    </Route>
    <Route path="/quiz" exact 
      element={<Quiz />}>
    </Route>
    <Route path="/weather" exact 
      element={<WeatherApp />}>
    </Route>
    <Route path="/dictionary" exact 
      element={<Dictionary />}>
    </Route>
    <Route path="/game" exact 
      element={<Game />}>
    </Route>
    </Routes>

  
    </div>
    </BrowserRouter>
  );
}

export default App;
