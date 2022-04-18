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
import { Container } from '@material-ui/core';
import { ReturnButton } from '../../Return-Button';

function QuizApp( {name, setName, fetchQuestions}) {
   
  return (
    <div>
      <div className="app" style={{backgroundImage: "url(./Damask.jpg)"}}>

        <Header/>
        <QuizHome 
                    name={name} 
                    setName={setName} 
                    fetchQuestions={fetchQuestions}
                  />
          
      </div>
      <Footer />
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", justifyContent: 'space-evenly' }}>
        <ReturnButton />
      </Container>

    </div>

  );
}

export default QuizApp;
