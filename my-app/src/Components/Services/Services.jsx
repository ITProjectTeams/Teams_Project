import React, { useEffect } from 'react'
import "./Services.scss"
import { useState } from 'react'
import axios from 'axios'
import HomeService from '../HomeService/HomeService'

export default function Services() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/products`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <React.Fragment>
      <div className="servicee">
        <div className="container">
          <div className="service_row">
            {product.slice(2, 3).map(product => {
              return (
                <React.Fragment key={product.id}>
                  <div className="div_image">
                    <img className='service_image' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                  </div>
                  <HomeService className='service_block' />
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>

    
  )
}
