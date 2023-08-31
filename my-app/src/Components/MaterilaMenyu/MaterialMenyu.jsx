import React, { useEffect, useState } from 'react'
import './MaterialMenyu.scss'
import Hr from '../hr'
import axios from 'axios'

export default function MaterialMenyu() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="material">
                <div className="container">
                    <div className="materials">
                        <div className="materials_content">
                            <div className="top_line">
                                <h3>MATERIAL</h3>
                                <Hr className='h3_line' />
                            </div>
                            <h1>choice of materials for quality furniture.</h1>
                            <p>You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
                            <button>See Materials</button>
                        </div>
                        <div className="materials_images_row">
                            {product.slice(3, 4).map(product => {
                                return (
                                    <React.Fragment key={product.id}>
                                        <div className="materials_image">
                                            <img className='image_top' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                            <div className="materials_images">
                                {product.slice(4, 6).map(product => {
                                    return (
                                        <React.Fragment key={product.id}>
                                            <img className='materials_images_image' src={process.env.PUBLIC_URL + "/images/" + product.image} alt="" />
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
