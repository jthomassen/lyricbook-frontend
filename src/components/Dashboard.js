import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LyricsContainer from './LyricsContainer'

function Dashboard({ lyrics }) {

    return (
        <div>
            <Header />
            <NavBar />
            <LyricsContainer 
                lyrics={lyrics}
            />
        </div>
    )
}

export default Dashboard