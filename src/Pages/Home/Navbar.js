import React from 'react'
import "./Home.css"
import Logo from "./aheiser-profile-pic2.jpg"

export const Navbar = () => {
  return (
    <div className="home-nav">
        <ul>
            <li className="extra-item"><a href="https://www.linkedin.com/in/abigail-heiser2/">LinkedIn</a></li>
            <li>
                <img className="logo" src={Logo} alt="logo"/>
            </li>
            {/* <li><a href="#footer">Contact</a></li> */}
            <li className="extra-item"><a href="https://github.com/aheiser2">Github</a></li>
        </ul>

    </div>
  )
}
