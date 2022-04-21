import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import { Navbar } from './Navbar'
import Quiz from '../Home/Keyframes/quizmaster.png'
import Dictionary from '../Home/Keyframes/gray-dict.png'
import Weather from '../Home/Keyframes/Weather-pic.png'
import Game from '../Home/Keyframes/2048.png'

export const Home = () => {
  return (
    <div className='home-section'>
    <Navbar />

    <div className="hero-section">
        <div className="row">
            <div className="container cont-quiz"> 
            <Link to="/quiz">
                <img src={Quiz} alt="Quiz"/>
                <div className="middle" style= {{backgroundColor: "rgba(12, 54, 70,.8)" }}>
                    <div className="text">This quiz app allows you to select one of 23 quiz categories, as well as a level of
                        difficulty, to answer questions about</div>
                </div>
            </Link>
            </div>
            <div className="container cont-weather">
            <Link to="/weather">
                <img src={Weather} alt="Weather"/>
                <div className="middle" style={{backgroundColor: "rgba(12, 54, 70,.8)" }}>
                    <div className="text">This weather app lets you input a city, state, and country to find out what 
                        the temperature is and what the weather is like</div>
                </div>
            </Link> 
            </div>
            <div className="container cont-dict">
            <Link to="/dictionary">
                <img src={Dictionary} alt="Dictionary"/>
                <div className="middle" style={{backgroundColor: "rgba(12, 54, 70,.8)" }}>
                    <div className="text">This dictionary app lets you type in a word and get back any definitions, as
                        well as possibly examples or synonyms</div>
                </div>
            </Link>
            </div>
            <div className="container cont-game">
            <Link to="/game">
                <img src={Game} alt="Game"/>
                <div className="middle" style={{backgroundColor: "rgba(12, 54, 70,.8)" }}>
                    <div className="text">This classic game lets you combine blocks to try and reach the winning score of 2048</div>
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
