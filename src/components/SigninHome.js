import React from 'react'
import { NavLink } from 'react-router-dom'

function SigninHome() {

    return (
        <div>
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

export default SigninHome