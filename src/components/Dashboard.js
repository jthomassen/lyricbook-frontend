import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LyricsContainer from './LyricsContainer'
import LyricView from './LyricView'

function Dashboard({ user, handleShowLyric, handleShowAllLyrics, deleteLyric, lyricClicked, lyricShow, onLogout }) {

    return (
        <div className="dashboard">
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
                    onLogout={onLogout}
                />
                <NavBar />
                <LyricsContainer
                    user={user}
                    handleShowLyric={handleShowLyric}
                    deleteLyric={deleteLyric}
                />
            </div>
            }
        </div>
    )
}

export default Dashboard