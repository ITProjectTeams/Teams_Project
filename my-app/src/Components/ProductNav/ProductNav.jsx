import React from 'react'
import "./ProductNav.scss"
import Hr from "../hr/index"
import Array from "../images/array.png"
import { Link } from 'react-router-dom'

export default function ProductNav() {
  // const Navigation = useNavigate()
  return (
    <>
      <div className="product_nav">
        <div className="container">
          <div className="products">
            <div className="product">
              <h3>PRODUCT</h3>
              <Hr className='h3_link' />
            </div>
            <div className="product_content">
              <h1>Choose your product themes.</h1>
              <p>Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p>
            </div>
          </div>
          <div className="product_selections">
            <div className="selection">
              <div className="section_content">
                <h1>01<span>Vintage</span></h1>
                <Link><img className='array_image' src={Array} alt="" /></Link>
              </div>
              <p>the use of simple and limited elements to get the best effect or impression.</p>
            </div>
            <div className="selection">
              <div className="section_content">
                <h1>02<span>Minimalist</span></h1>
                <Link to={"/minimalist/"}><img className='array_image' src={Array} alt="" /></Link>
              </div>
              <p>the use of simple and limited elements to get the best effect or impression.</p>
            </div>
            <div className="selection">
              <div className="section_content">
                <h1>03<span>Modern</span></h1>
                <Link><img className='array_image' src={Array} alt="" /></Link>
              </div>
              <p>the use of simple and limited elements to get the best effect or impression.</p>
            </div>
            <div className="selection">
              <div className="section_content">
                <h1>04<span>transitional</span></h1>
                <Link><img className='array_image' src={Array} alt="" /></Link>
              </div>
              <p>the use of simple and limited elements to get the best effect or impression.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
