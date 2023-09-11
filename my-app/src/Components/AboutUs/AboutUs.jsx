import React from 'react'
import "./AboutUs.scss"
import Hr from "../hr"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function AboutUs() {
  const [AboutUs, setAboutUs] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/AboutUs`)
      .then(res => setAboutUs(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <React.Fragment>
      <div className="container">

        <header>
          <h1>About</h1>
          <p>
            It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout.
          </p>
        </header>

        <div className="About_header_img">
          <div className="About_header_row">
            {AboutUs.slice(0, 1).map(AboutUs => {
              return (
                <React.Fragment key={AboutUs.id}>
                  <div className="div_image">
                    <img className='div_image' src={process.env.PUBLIC_URL + "/images/" + AboutUs.image} alt="error" />
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className="div_hr">
          <p>ACHIEVEMENT </p>
          <Hr className='Hr' />
        </div>

        <div className="div_h1">
          <h1>
            interior customization with Danaanz, <br /> best quality with professional workers
          </h1>
        </div>

        <div className="About_cart">
          <div className="About_cart_img">
            {AboutUs.slice(1, 2).map(AboutUs => {
              return (
                <React.Fragment key={AboutUs.id}>
                  <div className="cart_image">
                    <img className='cart_image' src={process.env.PUBLIC_URL + "/images/" + AboutUs.image} alt="error" />
                  </div>
                  <div className="cart">
                    <div className="cart_1">
                      <h1>350+</h1>
                      <p>Project Completed</p>
                    </div>
                    <div className="cart_1">
                      <h1>23+</h1>
                      <p>Professional Teams</p>
                    </div>
                    <div className="cart_1">
                      <h1>15+</h1>
                      <p>Years Experience</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className="div_hr">
          <p>SERVICE </p>
          <Hr className='Hr' />
        </div>

        <div className="bottomSection">
          <h1>Creative Person</h1>
          <p>
            Customize your interior design into a dream place <br /> with the best designers and quality furniture. We try <br /> our best to fulfill your expectations.
          </p>
        </div>

        <div className="About_cart">
          <div className="About_row">
            {AboutUs.slice(2, 6).map(AboutUs => {
              return (
                <React.Fragment>
                  <div className="About_div">
                    <img className='About_img' src={process.env.PUBLIC_URL + "/images/" + AboutUs.image} alt="error" />
                    <h1 key={AboutUs.id}>{AboutUs.title}</h1>
                    <p key={AboutUs.id}>{AboutUs.text}</p>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}