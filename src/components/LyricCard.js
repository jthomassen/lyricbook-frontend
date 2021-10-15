import React, { useState } from 'react';

function Lyric({lyric}) {

    return (
        <div>
            <h1>{lyric.title}</h1>
            <h2>{lyric.artist_name}</h2>
        </div>
    )
}

export default Lyric