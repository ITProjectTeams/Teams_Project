import React, { useEffect, useState } from 'react'
import "./UserLogo.scss"
import axios from 'axios'

export default function UserLogo() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9000/users`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="user_logo_div">
                {user.slice(0, 1).map(user => {
                    console.log(user);
                    return (
                        <React.Fragment key={user.id}>
                            <div className="user_logo_card">
                                <img className='user_logo' src={process.env.PUBLIC_URL + "/images/" + user.logo} alt="" />
                            </div>
                            <div className="user_content">
                                <h3>{user.name}</h3>
                                <span>{user.job}</span>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )
}
