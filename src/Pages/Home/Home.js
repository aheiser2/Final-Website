import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import { Navbar } from './Navbar'
import Red from './Red.jpg'
import Orange from './Orange.jpg'
import Yellow from './Yellow.jpg'
import Green from './Green.jpg'
import Blue from './Blue.jpg'
import Purple from './Purple.jpg'

export const Home = () => {
    //make container the href if wanting to make these connect to other websites/pages
  return (
    <div>
    <Navbar />

    <div className="hero-section">
        <div className="row">
            <div className="container"> 
            <Link to="/quiz">
                <img src={Red} alt="Red"/>
                <div className="middle" style= {{backgroundColor: "green" }}>
                    <div className="text"> Quiz </div>
                </div>
                </Link>
            </div>
            <div className="container">
            <Link to="/weather">
                <img src={Yellow} alt="Yellow"/>
                <div className="middle" style={{backgroundColor: "purple"}}>
                    <div className="text"> Weather </div>
                </div>
            </Link> 
            </div>
        </div>
        <div className="row">
            <div className="container">
            <Link to="/dictionary">
                <img src={Green} alt="Green"/>
                <div className="middle" style={{backgroundColor: "red"}}>
                    <div className="text"> Dictionary </div>
                </div>
            </Link>
            </div>
            <div className="container">
            <Link to="/game">
                <img src={Blue} alt="Blue"/>
                <div className="middle" style={{backgroundColor: "orange"}}>
                    <div className="text"> Game </div>
                </div>
            </Link>
            </div>
        </div>
    </div>

    <div id="footer" className="footer">
        <p>Contact me at aheiser2@yahoo.com</p>
    </div>
    </div>
  )
}
