import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ onLogout }) {

    return (
        <div>
            <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                style={{ textDecoration: 'none' }}
                exact to="/home">
                Home
            </NavLink>

            <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                style={{ textDecoration: 'none' }}
                exact to="/dashboard">
                Dashboard
            </NavLink>

            <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                style={{ textDecoration: 'none' }}
                exact to="/profile">
                Profile
            </NavLink>

            <NavLink exact to='/login'>
                <button className="logout-button" onClick={onLogout}>Logout</button>
            </NavLink>
        </div>
    )
}

export default NavBar