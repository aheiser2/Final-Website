// import React from 'react'

// export const QuizPage = () => {
//   return (
//     <div>QuizPage</div>
//   )
// }

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Quiz.css';
import Footer from './Quiz-Components/QuizFooter'
import Header from './Quiz-Components/QuizHeader'
import Home from './Quiz-Pages/QuizHome'
import Quiz from './Quiz-Pages/QuizPage'
import Result from './Quiz-Pages/Result'
import { useState } from 'react';
import axios from 'axios';

function QuizApp() {
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
    <div className="app" style={{backgroundImage: "url(./Damask.jpg)"}}>
    

    <Header/>
    <Routes>
    <Route path="/quizhome" exact 
      element={<Home 
                name={name} 
                setName={setName} 
                fetchQuestions={fetchQuestions}
              />}>
    </Route>
    <Route path="/quizpage" exact 
      element={<Quiz 
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
    </Routes>

  
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default QuizApp;
