import React from 'react';
import { useHistory } from 'react-router';
import LyricCard from './LyricCard';

function LyricsContainer({ user, handleShowLyric }) {

    const history = useHistory()

    function handleShowForm() {
        history.push("/lyric-submission")
    }

    return (

        <div className="lyrics-container">
            {user.lyrics ? user.lyrics.map((lyric) => (
                <LyricCard
                    key={lyric.id}
                    lyric={lyric}
                    user={user}
                    handleShowLyric={handleShowLyric}

                />              
            ))
                : null
            }
            <button
                className="button-lyric-box"
                onClick={handleShowForm}
            >
                <h1 className="lyric-box-title">Add New Song</h1>
                <h2 className="lyric-box-artist">+</h2>
            </button>
        </div>



    )
}

export default LyricsContainer