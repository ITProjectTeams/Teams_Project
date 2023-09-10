import React, { useEffect, useState } from 'react'
import "./OurTeams.scss"
import axios from 'axios'
import Hr from "./../hr"

export default function OurTeams() {
  const [OurTeams, setOurTeams] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/OurTeams`)
      .then(res => setOurTeams(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <React.Fragment>

      <div className="container">

        <header>

          <div className="TopHeader">
            <h1>Our Teams</h1>
            <p>
              It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking at its layout.
            </p>
          </div>

          <div className="OurTeams">
            <div className="Teams_row">
              {OurTeams.slice(0, 1).map(OurTeams => {
                return (
                  <React.Fragment key={OurTeams.id}>
                    <div className="div_image">
                      <img className='Teams_image' src={process.env.PUBLIC_URL + "/images/" + OurTeams.image} alt="" />
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
            <div className="div_hr">
              <p>Designer </p>
              <Hr className='TeamsHr' />
            </div>
          </div>

        </header>

        <div className="TopSection">
          <h1>Creative Person</h1>
          <p>
            Customize your interior design into a dream place <br /> with the best designers and quality furniture. We try <br /> our best to fulfill your expectations.
          </p>
        </div>

        <div className="Card">

          <div className="div_card">
            <div className="card_row">
              {OurTeams.slice(1, 9).map(OurTeams => {
                return (
                  <React.Fragment key={OurTeams.id}>
                    <div className="card_image">
                      <img className='card_image' src={process.env.PUBLIC_URL + "/images/" + OurTeams.image} alt="" />
                      <div className='names'>
                        <h1 key={OurTeams.id}>{OurTeams.name}</h1>
                        <p key={OurTeams.id}>{OurTeams.job}</p>
                      </div>
                    </div>

                  </React.Fragment>
                )
              })}
            </div>
          </div>

        </div>

        <div className="div_hr">
          <p>SERVICE </p>
          <Hr className='TeamsHr' />
        </div>

        <div className="TopSection">
          <h1>Why Choose Us</h1>
          <p>
            Customize your interior design into a dream place <br /> with the best designers and quality furniture. We try <br /> our best to fulfill your expectations.
          </p>
        </div>

        <div className="service_cart">
          <div className="service_row">
            {OurTeams.slice(9, 13).map(OurTeams => {
              return (
                <React.Fragment>
                  <div className="service_div">
                    <img className='service_img' src={process.env.PUBLIC_URL + "/images/" + OurTeams.image} alt="" />
                    <h1 key={OurTeams.id}>{OurTeams.title}</h1>
                    <p key={OurTeams.id}>{OurTeams.text}</p>
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
