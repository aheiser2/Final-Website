import React from 'react';
import { Link } from 'react-router-dom';
import "../Quiz.css";


// changed from 'to = ""' to "/quiz"
const Header = () => {
  return (
  <div className='header'>
      <Link to="/quiz" className='title'> 
      Quizmaster
      </Link>
      <hr className='divider'></hr>
  </div>
  );
};

export default Header;
