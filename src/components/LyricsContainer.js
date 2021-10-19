import React from 'react';
import LyricCard from './LyricCard';


function LyricsContainer({ user }) {

    return (
        <div className="lyrics-container">
            {user.lyrics.map((lyric) => (
                <LyricCard
                    key={lyric.id}
                    lyric={lyric}
                />
            ))
            
            }
        </div>
    )
}

export default LyricsContainer