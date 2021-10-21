import React from 'react';
import { useHistory } from 'react-router';
import LyricCard from './LyricCard';

function LyricsContainer({ user, handleShowLyric, deleteLyric }) {

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
                    deleteLyric={deleteLyric}
                />
            ))
                : null
            }
            <div className="add-lyric-box">
                <h1 className="add-lyric-box-title">New Song</h1>
                <button onClick={handleShowForm} className="add-lyric-button">
                    <ion-icon className="button-icons" name="add-outline"></ion-icon>
                </button>
            </div>
        </div>



    )
}

export default LyricsContainer