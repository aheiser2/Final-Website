import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import { Navbar } from './Navbar'
import Quiz from '../Home/Keyframes/quizmaster.png'
import Dictionary from '../Home/Keyframes/gray-dict.png'
import Weather from '../Home/Keyframes/white-dict.png'
import Game from '../Home/Keyframes/2048.png'

export const Home = () => {
    //make container the href if wanting to make these connect to other websites/pages
  return (
    <div className='home-section'>
    <Navbar />

    <div className="hero-section">
        <div className="row">
            <div className="container cont-quiz"> 
            <Link to="/quiz">
                <img src={Quiz} alt="Quiz"/>
                <div className="middle" style= {{backgroundColor: "green" }}>
                    <div className="text">Quiz</div>
                </div>
            </Link>
            </div>
            <div className="container cont-weather">
            <Link to="/weather">
                <img src={Weather} alt="Weather"/>
                <div className="middle" style={{backgroundColor: "purple"}}>
                    <div className="text">Weather</div>
                </div>
            </Link> 
            </div>
            <div className="container cont-dict">
            <Link to="/dictionary">
                <img src={Dictionary} alt="Dictionary"/>
                <div className="middle" style={{backgroundColor: "rgba(100,100,100, .5"}}>
                    <div className="text">Dictionary</div>
                </div>
            </Link>
            </div>
            <div className="container cont-game">
            <Link to="/game">
                <img src={Game} alt="Game"/>
                <div className="middle" style={{backgroundColor: "orange"}}>
                    <div className="text">Game</div>
                </div>
            </Link>
            </div>
        </div>
        
        {/* <div className="row">
        
        </div> */}
    </div>

    <div id="footer" className="footer">
    <a href="mailto:aheiser2@yahoo.com">Contact me at: aheiser2@yahoo.com </a>
            {/* <p>Contact me at aheiser2@yahoo.com</p> */}
    </div>
    </div>
  )
}
