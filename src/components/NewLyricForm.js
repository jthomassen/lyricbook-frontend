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

        history.push("/dashboard")
    }

    return (
        <div className="new-lyric-page">
            <button className="back-button" onClick={handleBackToDash}><ion-icon name="arrow-back-circle-outline"></ion-icon></button>
            <div className="lyric-form-container">
                <form className="new-lyric-form" onSubmit={handleSubmit}>
                    <input
                        className="title-input"
                        type="textarea"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="artist-input"
                        type="textarea"
                        placeholder="Artist"
                        value={artist_name}
                        onChange={(e) => setArtistName(e.target.value)}
                    />
                    <input
                        className="content-input"
                        type="textarea"
                        placeholder="Lyrics"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <input
                        className="copyright-input"
                        type="textarea"
                        placeholder="© Copyright Name"
                        value={copyright_name}
                        onChange={(e) => setCopyrightName(e.target.value)}
                    />
                    <button className="publish-button" type="submit">Publish</button>

                </form>
            </div>
        </div>
    )
}

export default NewLyricForm