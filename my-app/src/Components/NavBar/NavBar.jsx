import React from 'react'
import "./NavBar.scss"
import { Link } from "react-router-dom"
import Navlogo from "../images/nav_logo.png"


export default function   NavBar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <Link to={"/"} className='logo'>
              <img src={Navlogo} alt="" />
            </Link>
            <div className="nav_menu">
              <Link className='nav_links' to={"/"}>Home</Link>
              <Link className='nav_links' to={"/about/"}>About Us</Link>
              <Link className='nav_links' to={"/services/"}>Services</Link>
              <Link className='nav_links' to={"/ourteams/"}>Our Teams</Link>
              <Link className='nav_btn' to={"/contact/"}>Contact Us  </Link>
            </div>
          </div>
        </div>
      </nav >
    </>
  )
}
