import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'


function Home({ user, onLogout }) {

    const history = useHistory()

    function goToDashBoard() {
        history.push("/dashboard")
    }

    return (
        <div className="home">
            <Header
                user={user}
                onLogout={onLogout}
            />
            <NavBar />
            <div className="home-details">
                <h3 className="welcome-text">welcome to lyricbook!</h3>
                <button className="home-start-button" onClick={goToDashBoard}>
                    Get Started!
                </button>
            </div>
        </div>
    )
}

export default Home