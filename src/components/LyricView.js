import React from 'react'

function LyricView({ lyricShow, handleShowAllLyrics }) {

    return (
        <div className="lyric-view">
            <button className="back-button" onClick={handleShowAllLyrics}>Back to Dashboard</button>
            <div className="lyric-view-container">
                <h1 className="lyric-title">{lyricShow.title}</h1>
                <h2 className="lyric-artist">{lyricShow.artist_name}</h2>
                <p className="lyric-content">{lyricShow.content}</p>
                <h5 className="lyric-copyright">© {lyricShow.copyright_name}</h5>
                {/* <h5 className="lyric-copyright">{lyricShow.copyright_year}</h5> */}
            </div>
        </div>

    )
}

export default LyricView