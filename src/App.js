
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './Pages/QuizPage/Quiz.css';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Home } from './Pages/Home/Home';
import WeatherApp from './Pages/Weather/Weather';
import { Dictionary } from './Pages/Dictionary/Dictionary';
import Game from './Pages/Game/Game';
// import { Gameboard } from './Pages/Game/Gameboard';
import Quiz from './Pages/QuizPage/Quiz';
import QuizPage from './Pages/QuizPage/Quiz-Pages/QuizPage'
import Result from './Pages/QuizPage/Quiz-Pages/Result';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async( category = "", difficulty = "") => {

    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);

  };
  return (
    
    <BrowserRouter>

    <Routes>
    <Route path="/"
      element={<Home />}>
    </Route>
    {/* <Route path="/quiz" //removed "exact"
      element={<Quiz />}>
    </Route> */}
    <Route path="/quiz" exact 
          element={<Quiz
                name={name} 
                setName={setName} 
                fetchQuestions={fetchQuestions}
              />}>
        </Route>
        <Route path="/quizpage" exact 
          element={<QuizPage 
                name={name} 
                questions={questions} 
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />}>
        </Route>
        <Route path="/result" exact 
          element={<Result
                name={name} 
                score={score}
              />}>
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
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
