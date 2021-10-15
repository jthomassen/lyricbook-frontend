import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'

function Home() {

    return (
        <div>
            <Header />
            <NavBar />
            <h1>Welcome to Lyricbook</h1>
            <NavLink 
                    activeClassName="active-nav-link" 
                    className="nav-link" 
                    style={{ textDecoration: 'none' }}
                    exact to="/dashboard">
                    Get Started
            </NavLink>
        </div>
    )
}

export default Home