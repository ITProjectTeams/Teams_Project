import React from 'react'
import "./AboutUs.scss"
import Hr from "../hr"
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserLogo from '../UserLogo/UserLogo'

export default function AboutUs() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/products`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="top_about">
            <div className="about_h3">
              <h3>About</h3>
              <Hr className="h3_line" />
            </div>
            <div className="about_p">
              <p>“We're one of the best furniture agency. Prioritizing customers <br /> and making purchases easy are the hallmarks of our agency.”</p>
            </div>
            <div className="header_image_about_row">
              {product.slice(1, 2).map(product => {
                return (
                  <React.Fragment key={product.id}>
                    <div className="about_card_image">
                      <img className='about_image' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                    </div>
                    <div className="about_card_content">
                      <UserLogo className='user_logo_' />
                      <p>{product.title}</p>
                      <button>Learn More</button>
                    </div>
                  </React.Fragment>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
