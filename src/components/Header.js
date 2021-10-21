import React from 'react'

function Header({ user }) {

    return (
        <div>
            <h1>Lyricbook</h1>
            <div className="prof-img-container">
                <img src={user.profile_img} alt="profile picture" className="header-prof"/>
            </div>
        </div>
    )
}

export default Header