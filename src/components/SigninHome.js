import React from 'react'
import { NavLink } from 'react-router-dom'

function SigninHome() {

    return (
        <div>
            <NavLink 
                    activeClassName="active-nav-link" 
                    className="nav-link" 
                    style={{ textDecoration: 'none' }}
                    exact to="/home">
                    Login (fake)
            </NavLink>
        </div>
    )
}

export default SigninHome