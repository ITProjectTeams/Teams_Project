import React, { useEffect, useState } from 'react'
import "./Portofolio.scss"
import axios from 'axios'

export default function Portofolio() {
  const[product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:9000/products`)
    .then(res => setProduct(res.data))
    .cath(err => console.log(err))

  }, [])
   return (
    <>
    <div className="row">
      {product.slice(21, 22).map(product => {
        return(
          <React.Fragment key={product.id}>
            <img src={product.env.PUBLIC_URL + "/images/" + product.image} alt="" />

          </React.Fragment>
        )
      })}
    </div>
    
    </>
  )
}
