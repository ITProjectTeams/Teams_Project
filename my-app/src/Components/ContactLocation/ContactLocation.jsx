import React from 'react'
import "./ContactLocation.scss"
import Hr from '../hr'

export default function ContactLocation() {
    return (
        <>
            <main>
                <div className="top_location">
                    <h3>Loaction</h3>
                    <Hr />
                </div>
                <div className="bottom_location">
                    <div className="location_left">
                        <div className="visit">
                            <h1>Visit Our Stores</h1>
                            <span>
                                Find us at these locations.
                            </span>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <span>dananz@gmail.com</span>
                        </div>
                        <div className="phone">
                            <h3>Phone</h3>
                            <span>
                                +62 815 002 1000
                            </span>
                        </div>
                    </div>
                    <div className="location_right">
                        <div className="jakarta">
                        <h3>Jakarta</h3>
                        <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        </div>
                        <div className="surakarta">
                        <h3>Surakarta</h3>
                        <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        </div>
                        <div className="yogyakarta">
                        <h3>Yogyakarta</h3>
                        <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        </div>
                        <div className="bandung">
                        <h3>Bandung</h3>
                        <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
