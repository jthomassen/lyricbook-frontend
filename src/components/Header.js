import React from 'react'
import { useHistory } from 'react-router-dom'

function Header({ user, onLogout }) {

    const history = useHistory()

    function goToHome() {
        history.push("/home")
    }

    function goToProfile() {
        history.push("/profile")
    }

    return (
        <div className="header">
            <div className="prof-img-container">
                <img 
                    src={user.profile_img} 
                    alt="profile picture" 
                    className="header-prof"
                    onClick={goToProfile}
                />
            </div>
            <h1 className="logo" onClick={goToHome}>lyricbook</h1>
            <button onClick={onLogout} className="logout-button">
                <div className="logout-text">logout</div>
                <div className="logout-icon"><ion-icon  name="log-out-outline"></ion-icon></div>
            </button>
        </div>
    )
}

export default Header