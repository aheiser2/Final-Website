import React from 'react'

// export const QuizPage = () => {
//   return (
//     <div>QuizPage</div>
//   )
// }

import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import './Quiz.css';
import Footer from './Quiz-Components/QuizFooter'
import Header from './Quiz-Components/QuizHeader'
import QuizHome from './Quiz-Pages/QuizHome'
import QuizPage from './Quiz-Pages/QuizPage'
import Result from './Quiz-Pages/Result'
import { useState } from 'react';
import axios from 'axios';

function QuizApp( {name, setName, fetchQuestions}) {
  // const [name, setName] = useState("");
  // const [questions, setQuestions] = useState();
  // const [score, setScore] = useState(0);


  // const fetchQuestions = async( category = "", difficulty = "") => {

  //   const {data} = await axios.get(
  //     `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
  //   }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  //   );

  //   setQuestions(data.results);

  // };


  
  return (
    <div>
    <div className="app" style={{backgroundImage: "url(./Damask.jpg)"}}>
    

    <Header/>
    <QuizHome 
                name={name} 
                setName={setName} 
                fetchQuestions={fetchQuestions}
              />
                {/* WHy
    <Link to ="/quizpage" exact 
      element={<QuizPage 
                name={name} 
                questions={questions} 
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />}>
                hello
    </Link>
    <Link to="/result" exact 
      element={<Result
                name={name} 
                score={score}
              />}>
                Hey
    </Link> */}

  
    </div>
    {/* <Outlet /> */}
    <Footer />
    </div>




    // <div>
    // <div className="app" style={{backgroundImage: "url(./Damask.jpg)"}}>
    

    // <Header/>
    // <Routes>
    // <Route path="/quiz/quizhome" exact 
    //   element={<QuizHome 
    //             name={name} 
    //             setName={setName} 
    //             fetchQuestions={fetchQuestions}
    //           />}>
    // </Route>
    // <Route path="/quiz/quizpage" exact 
    //   element={<QuizPage 
    //             name={name} 
    //             questions={questions} 
    //             score={score}
    //             setScore={setScore}
    //             setQuestions={setQuestions}
    //           />}>
    // </Route>
    // <Route path="/quiz/result" exact 
    //   element={<Result
    //             name={name} 
    //             score={score}
    //           />}>
    // </Route>
    // </Routes>

  
    // </div>
    // <Footer />
    // </div>
  );
}

export default QuizApp;
