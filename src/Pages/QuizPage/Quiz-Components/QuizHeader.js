import React from 'react';
import { Link } from 'react-router-dom';
import "../Quiz.css";


// changed from 'to = ""' to "/quiz"
const Header = () => {
  return (
  <div className='quiz-header'>
      <Link to="/quiz" className='quiz-title'> 
      Quizmaster
      </Link>
      <hr className='quiz-divider'></hr>
  </div>
  );
};

export default Header;
