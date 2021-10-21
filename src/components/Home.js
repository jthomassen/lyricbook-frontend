import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'


function Home({ user }) {

    const history = useHistory()

    function goToDashBoard() {
        history.push("/dashboard")
    }

    return (
        <div className="home">
            <Header
                user={user}
            />
            <NavBar />
            <div className="home-details">
                <h1 className="welcome-text">welcome to lyricbook!</h1>
                <button className="home-start-button" onClick={goToDashBoard}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Home