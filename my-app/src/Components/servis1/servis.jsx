import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./servis.scss"

export default function Servis() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <header>
                <h1>Services</h1>
                <p>
                    It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking at its layout.
                </p>
            </header>

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

            <div className="ACHIEVEMENT">
                <div className="container">
                    <div className="ACHIEVEMENT_row">
                        {products.slice(32, 36).map(products => {
                            return (
                                <React.Fragment key={products.id}>
                                    <div className='div'>
                                        <div className="ACHIEVEMENT_image">
                                            <img className='ACHIEVEMENT_image' src={process.env.PUBLIC_URL + "/images/" + products.image} alt="" />
                                        </div>
                                        <div className="info">
                                            <h1 key={products.id}>{products.title}</h1>
                                            <p key={products.id}>{products.text}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}