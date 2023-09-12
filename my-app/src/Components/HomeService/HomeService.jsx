import React from 'react'
import "./HomeService.scss"
import Hr from "../hr"
import Array from "../images/array.png"

export default function HomeService() {
    return (
        <>
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
                            <h3><span>02</span> <span >Consultant</span></h3>
                            <img className='array' src={Array} alt="" />
                        </li>
                        <li>
                            <h3><span>03</span> <span >Construction Consultant</span></h3>
                            <img className='array' src={Array} alt="" />
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}
