import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LyricsContainer from './LyricsContainer'
import LyricView from './LyricView'

function Dashboard({ user, handleShowLyric, handleShowAllLyrics, lyricClicked, lyricShow }) {

    return (
        <div>
            { lyricClicked ? 
            <div>
                <LyricView 
                    lyricShow={lyricShow}
                    handleShowAllLyrics={handleShowAllLyrics}
                />
            </div>
            :
            <div>
                <Header 
                    user={user}
                />
                <NavBar />
                <LyricsContainer
                    user={user}
                    handleShowLyric={handleShowLyric}
                />
            </div>
            }
        </div>
    )
}

export default Dashboard