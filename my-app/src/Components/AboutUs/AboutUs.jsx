import React from 'react'
import "./AboutUs.scss"
import Hr from "../hr"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function AboutUs() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/AboutUs`)
      .then(res => setProduct(res.data))
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

      </div>
    </React.Fragment>
  )
}