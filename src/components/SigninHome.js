import React from 'react'
import { Link } from 'react-router-dom'

function SigninHome() {

    return (
        <div>
            <Link 
                className="signin-home-link" 
                exact to="/login"
            >
                Login
            </Link>
            <Link 
                className="signin-home-link" 
                exact to="/signup"
            >
                Signup
            </Link>
        </div>
    )
}

export default SigninHome