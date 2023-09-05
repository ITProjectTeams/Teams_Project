import React, { useEffect, useState } from 'react'
import "./Header.scss"
import axios from 'axios'
import Hr from "./../hr"

export default function Header() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <header className='top_header'>
                <div className="container">
                    <div className="header">
                        <div className="header_top">
                            <div className="h1">
                                <h1>Design your <br /> interor with high <br /> quality.</h1>
                                <Hr className='h1_line' />
                            </div>
                            <div className="p">
                                2022
                                <br />
                                ALL RIGHT RESERVED
                            </div>
                        </div>
                        <div className='header_row'>
                            {products.slice(0, 1).map(products => {
                                return (
                                    <React.Fragment key={products.id}>
                                        <div className="header_product">
                                            <div className="header_image">
                                                <img src={process.env.PUBLIC_URL + "/images/" + products.image} alt="" />
                                            </div>
                                            <div className="header_image_about">
                                                <div className="completed">
                                                    <h1>350+</h1>
                                                    <p>Project Completed</p>
                                                </div>
                                                <div className="teams">
                                                    <h1>23+</h1>
                                                    <p>Professional Teams</p>
                                                </div>
                                                <div className="exprience">
                                                    <h1>15+</h1>
                                                    <p>Years Experience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
