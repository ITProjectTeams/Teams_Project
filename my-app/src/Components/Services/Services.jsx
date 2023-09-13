import React, { useEffect } from 'react'
import "./Services.scss"
import { useState } from 'react'
import axios from 'axios'
import Hr from "../hr/index"
import Array from "../images/array.png"

export default function Services() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <React.Fragment>

      <div className="TopHeader">
        <h1>Services</h1>

        <p>
          It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking at its layout.
        </p>
      </div>

      <div className="servicee">
        <div className="container">
          <div className="service_row">
            {products.slice(2, 3).map(products => {
              return (
                <React.Fragment key={products.id}>
                  <div className="div_image">
                    <img className='service_image' src={process.env.PUBLIC_URL + "/images/" + products.image} alt="" />
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="service">
          <div className="service_">
            <h3>SERVICE</h3>
            <Hr className='h3_line' />
          </div>
          <div className="about_service">
            <div className="service_content">
              <h1>attractive furniture with the best quality.</h1>

              <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
            </div>
          </div>
          <div className="uls_service">
            <ul>
              <li>
                <h3><span>01</span> <span >Interior Design</span></h3>
                <img className='array' src={Array} alt="" />
              </li>
              <li>
                <h3><span>01</span> <span >Consultant</span></h3>
                <img className='array' src={Array} alt="" />
              </li>
              <li>
                <h3><span>01</span> <span >Construction Consultant</span></h3>
                <img className='array' src={Array} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="servicee">
        <div className="container">
          <div className="service_row">
            {products.slice(2, 3).map(products => {
              return (
                <React.Fragment key={products.id}>
                  <div className="div_image">
                    <img className='service_image' src={process.env.PUBLIC_URL + "/images/" + products.image} alt="" />
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div> */}


    </React.Fragment>
  )
}