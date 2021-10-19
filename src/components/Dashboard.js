import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LyricsContainer from './LyricsContainer'

function Dashboard({ user, handleLyricClick }) {

    return (
        <div>
            <Header />
            <NavBar />
            <LyricsContainer 
                user={user}
                handleLyricClick={handleLyricClick}
            />
        </div>
    )
}

export default Dashboard