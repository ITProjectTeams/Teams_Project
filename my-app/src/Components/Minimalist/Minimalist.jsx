import React, { useEffect, useState } from 'react'
import "./Minimalist.scss"
import axios from 'axios'


export default function Minimalist() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/products`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  })

  return (
    <>
      <section id="vintage">
        <div className="top_minimalist">
          <div className="container">
            <div className="top_header">
              <h1>Minimalist Room</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="row_images">
              <React.Fragment key={product.id}>
                {product.slice(26, 27).map(product => {
                  return (
                    <React.Fragment>
                      <img className='room_image' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                      <div className="two_div">
                        <div className="overview">
                          <h3>Project Overview</h3>
                          <p>
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                          </p>
                          <div className="spans">
                            <span>July 22 - 2022</span>
                            <span>Interior Design - Furnitur</span>
                          </div>
                        </div>
                        <div className="process">
                          <h3>Design Process</h3>
                          <p>
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.

                          </p>
                          <p>
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                          </p>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })}
              </React.Fragment>
            </div>
            <div className="button_images_row">
              <div className="wrapper">
                {product.slice(27, 32).map(product => {
                  return (
                    <React.Fragment key={product.id} >
                      <img className='buttom_images ' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
