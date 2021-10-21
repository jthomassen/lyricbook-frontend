import React from 'react'
import { useHistory } from 'react-router-dom'

function Header({ user }) {

    const history = useHistory()

    function goToHome() {
        history.push("/home")
    }

    function goToProfile() {
        history.push("/profile")
    }

    return (
        <div className="header">
            <h1 className="logo" onClick={goToHome}>lyricbook</h1>
            <div className="prof-img-container">
                <img 
                    src={user.profile_img} 
                    alt="profile picture" 
                    className="header-prof"
                    onClick={goToProfile}
                />
            </div>
        </div>
    )
}

export default Header