import React from 'react'
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
                <img src={Red} alt="Red"/>
                <div className="middle" style= {{backgroundColor: "green" }}>
                    <div className="text"> Sample </div>
                </div>
            </div>
            {/* <div className="container">
                <img src={Orange} alt="Orange"/>
                <div className="middle" style={{backgroundColor: "blue"}}>
                    <div className="text"> Sample </div>
                </div>
            </div> */}
            <div className="container">
                <img src={Yellow} alt="Yellow"/>
                <div className="middle" style={{backgroundColor: "purple"}}>
                    <div className="text"> Sample </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="container">
                <img src={Green} alt="Green"/>
                <div className="middle" style={{backgroundColor: "red"}}>
                    <div className="text"> Sample </div>
                </div>
            </div>
            <div className="container">
                <img src={Blue} alt="Blue"/>
                <div className="middle" style={{backgroundColor: "orange"}}>
                    <div className="text"> Sample </div>
                </div>
            </div>
            {/* <div className="container">
                <img src={Purple} alt="Purple"/>
                <div className="middle" style={{backgroundColor: "yellow"}}>
                    <div className="text"> Sample </div>
                </div>
            </div> */}
        </div>
    </div>

    <div id="footer" className="footer">
        <p>Contact me at aheiser2@yahoo.com</p>
    </div>
    </div>
  )
}
