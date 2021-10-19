import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'

function Home() {

    return (
        <div>
            <Header />
            <NavBar />
            <h1>Welcome to Lyricbook</h1>
            <Link 
                exact to="/dashboard"
                className="home-dashboard-link" 
            >
                Get Started
            </Link>
        </div>
    )
}

export default Home