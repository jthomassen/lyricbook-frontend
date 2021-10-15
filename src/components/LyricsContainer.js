import React from 'react';
import LyricCard from './LyricCard';


function LyricsContainer({ lyrics }) {

    return (
        <div>
            {lyrics.map((lyric) => (
                <LyricCard
                    key={lyric.id}
                    lyric={lyric}
                />
            ))}
        </div>
    )
}

export default LyricsContainer