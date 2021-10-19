import React from 'react';
// import { Link } from 'react-router-dom';

function Lyric( { lyric } ) {

    return (
        <div>
            <button 
                className="button-lyric-box"
                >
                <h1 className="lyric-box-title">{lyric.title}</h1>
                <h2 className="lyric-box-artist">{lyric.artist_name}</h2>
            </button>
        </div>
    )
}

export default Lyric