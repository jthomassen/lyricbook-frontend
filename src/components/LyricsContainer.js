import React, { useState } from 'react';
import LyricCard from './LyricCard';

function LyricsContainer({ user, handleLyricClick }) {

    return (

        <div className="lyrics-container">
            {user.lyrics.map((lyric) => (
                <LyricCard
                    key={lyric.id}
                    lyric={lyric}
                    handleLyricClick={handleLyricClick}
                />
            ))}
            <button
                className="button-lyric-box"
            >
                <h1 className="lyric-box-title">Add New Song</h1>
                <h2 className="lyric-box-artist">+</h2>
            </button>
        </div>



    )
}

export default LyricsContainer