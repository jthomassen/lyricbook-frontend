import React from 'react';

function Lyric({ lyric, handleShowLyric }) {

    console.log(lyric)

    return (
        <div>
            <button
                className="button-lyric-box"
                onClick={() => handleShowLyric(lyric.id)}
            >
                <h1 className="lyric-box-title">{lyric.title}</h1>
                <h2 className="lyric-box-artist">{lyric.artist_name}</h2>
            </button>
        </div>
    )
}

export default Lyric