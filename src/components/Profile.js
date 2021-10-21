import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

function Profile({ user }) {

    return (
        <div>
            <Header 
                user={user}
            />
            <NavBar />
            <h1>Profile</h1>
        </div>
    )
}

export default Profile