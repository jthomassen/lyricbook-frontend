import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Signup({ handleLogin }) {

    const [created, setCreated] = useState(false)
    const [newUsername, setUsername] = useState("")
    const [newPassword, setPassword] = useState("")
    const [bio, setBio] = useState("")
    const [profile_img, setProfileImg] = useState("")

    // const production = "https://lyricbook-backend.herokuapp.com/"
    // const development = "http://localhost:3000/"
    // const url = (process.env.NODE_ENV === "production" ? production : development)

    const history = useHistory();

    function onSignup(username, password, bio, profile_img) {
        // fetch(`${url}/api/v1/users`, {
        fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${username}`,
              password: `${password}`,
              bio: `${bio}`,
              profile_img: `${profile_img}`,
            },
          }),
        })
          .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                handleLogin(data.user)
                localStorage.setItem("jwt", data.jwt);
                history.push("/home")
              });
            } else {
              console.log("form incorrectly filled out")
            }
          })
      }

    function handleSubmitSignup(e) {
        e.target.reset()
        e.preventDefault()
        onSignup(newUsername, newPassword, bio, profile_img)
    }

    // function handleSignupSubmit(e) {
    //     e.preventDefault()
    //     fetch("http://localhost:3000/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({ 
    //             user: {
    //                 username: `${username}`,
    //                 password: `${password}`,
    //                 bio: `${bio}`,
    //                 profile_img: `${profile_img}`
    //             }
    //         }),
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //           response.json().then((data) => {
    //             // setUser(data.user)
    //             onLogin(data.user)
    //             localStorage.setItem("jwt", data.jwt);
    //             history.push("/home")
    //           });
    //         } else {
    //           console.log("form incorrectly filled out")
    //         }
    //       })
    //     }

   

    return (
        <div>
            <form onSubmit={handleSubmitSignup}>
                Username:
                <input
                    className="login-inputs"
                    type="text"
                    id="username"
                    placeholder=" Username"
                    value={newUsername}
                    onChange={(e) => setUsername(e.target.value)}
                />
                Password:
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    placeholder=" Password"
                    value={newPassword}
                    onChange={(e) => setPassword(e.target.value)}
                />
                Bio:
                <input
                    className="login-inputs"
                    type="text"
                    id="password"
                    placeholder=" Tell us about yourself"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                Profile Picture:
                <input
                    className="login-inputs"
                    type="text"
                    id="password"
                    placeholder=" Insert profile picture"
                    value={profile_img}
                    onChange={(e) => setProfileImg(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>

        </div>
    )
}

export default Signup