import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LyricsContainer from './LyricsContainer'

function Dashboard({ user }) {

    return (
        <div>
            <Header />
            <NavBar />
            <LyricsContainer 
                user={user}
            />
        </div>
    )
}

export default Dashboard