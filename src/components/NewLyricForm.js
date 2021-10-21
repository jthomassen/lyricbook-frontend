import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

function NewLyricForm({ addNewLyric }) {

    const history = useHistory()

    const [addedSong, setAddedSong] = useState(false)
    const [title, setTitle] = useState("")
    const [artist_name, setArtistName] = useState("")
    const [content, setContent] = useState("")
    const [copyright_name, setCopyrightName] = useState("")
    const [copyright_year, setCopyrightYear] = useState(null)

    function handleBackToDash() {
        history.push("/dashboard")
        window.location.reload()
    }

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()

        const newLyric = {
            title,
            artist_name,
            content,
            copyright_name,
            copyright_year
        }

        addNewLyric(newLyric)
        setAddedSong(true)
    }



    return (
        <div>
            <button onClick={handleBackToDash}>Back to Dashboard</button>
            <form onSubmit={handleSubmit}>
                <input
                    className="lyric-inputs"
                    type="text"
                    placeholder=" Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="lyric-inputs"
                    type="text"
                    placeholder=" Artist"
                    value={artist_name}
                    onChange={(e) => setArtistName(e.target.value)}
                />
                <input
                    className="lyric-inputs"
                    type="text"
                    placeholder=" Lyrics"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    className="lyric-inputs"
                    type="text"
                    placeholder=" Copyright Name"
                    value={copyright_name}
                    onChange={(e) => setCopyrightName(e.target.value)}
                />
                {/* <input 
                    className="lyric-inputs"
                    type="number"
                    placeholder=" Copyright Year"
                    value={copyright_year}
                    onChange={(e) => setCopyrightYear(e.target.value)}
                /> */}

                <button type="submit">Publish</button>

            </form>
            {addedSong ?
                <div>
                    <h3>Song Published!</h3>
                    <button onClick={handleBackToDash}>View Songs</button>
                </div>
                :
                null
            }
        </div>
    )
}

export default NewLyricForm