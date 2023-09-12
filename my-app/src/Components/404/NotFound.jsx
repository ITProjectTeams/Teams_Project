import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.scss"

export default function NotFound() {

    return (
        <React.Fragment>
            <h1>404 - Not Found</h1>
            <button className='btn'><Link to={"/"}>Home</Link></button>
        </React.Fragment>
    )
}