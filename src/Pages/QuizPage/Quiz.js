import React from 'react'
import './Quiz.css';
import Header from './Quiz-Components/QuizHeader'
import QuizHome from './Quiz-Pages/QuizHome'
import { Container } from '@material-ui/core';
import { ReturnButton } from '../../Return-Button';

function QuizApp( {name, setName, fetchQuestions}) {
   
  return (
    <div className='quiz-bg'>
      {/* <div className="quiz-app" style={{backgroundImage: "url(./Damask.jpg)"}}> */}
      <div className="quiz-app" >

        <Header/>
        <QuizHome 
                    name={name} 
                    setName={setName} 
                    fetchQuestions={fetchQuestions}
                  />
          
      </div>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", justifyContent: 'space-evenly' }}>
        <ReturnButton />
      </Container>
    </div>

  );
}

export default QuizApp;
