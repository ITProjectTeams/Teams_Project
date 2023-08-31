import React from 'react'
import "./ButtonBar.scss"
import { Link } from 'react-router-dom'
import Logo from "../images/nav_logo.png"
import Facebook from "../images/facebook.png"
import Insta from "../images/instagram.png"
import Tiktok from "../images/tiktok.png"
import Youtube from "../images/youtube.png"

export default function ButtonBar() {
    return (
        <>
            <div className="button_bar">
                <div className="container">
                    <div className="top_bar">
                        <div className="bar_h1">
                            <h1>let's discuss making your interior like a dream place!</h1>
                        </div>
                        <div className="bar_content">
                            <p>Contact us below to work together to build your amazing interior</p>
                            <Link to={"/contact/"}><button>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button_bar_">
                <div className="container">
                    <div className="about_to">
                        <div className="about_">
                            <div className="about_image">
                                <img className='button_logo' src={Logo} alt="" />
                            </div>
                            <h1>One of the best furniture agency.</h1>
                        </div>
                        <div className="input_follows">
                            <label>
                                <div>
                                    <span>Enter  your email to get the laterst news</span>
                                    <input type="text" placeholder='Email Address' />
                                </div>
                            </label>
                            <div className="follows">
                                <div className="">
                                    <span>Follow us On</span>
                                    <div className="follow_images">
                                        <Link to={"#"}><img className="folllow_image" src={Facebook} alt="" /></Link>
                                        <Link to={"#"}><img className="folllow_image" src={Tiktok} alt="" /></Link>
                                        <Link to={"#"}><img className="folllow_image" src={Insta} alt="" /></Link>
                                        <Link to={"#"}><img className="folllow_image" src={Youtube} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
