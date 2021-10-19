import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Login({ handleLogin }) {

    const production = "https://lyricbook-backend.herokuapp.com/"
    const development = "http://localhost:3000/"
    const url = (process.env.NODE_ENV ? production : development)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const history = useHistory();

    function onLogin(username, password) {
        // fetch(`${url}/api/v1/login`, {
        fetch(`${url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${username}`,
              password: `${password}`
            }
          })
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              handleLogin(data.user)
              localStorage.setItem("jwt", data.jwt);
              history.push("/home")
              console.log(data.user)
            });
          } else {
            console.log("wrong username/password")
            response.json().then((data) => {
                setError(data.message)
            })
          }
        })
      }

    function handleSubmitLogin(e) {
        e.preventDefault()
        e.target.reset()
        onLogin(username, password)
    }

    // const token = localStorage.getItem("jwt");

    // function handleLoginSubmit(e) {
    //     e.preventDefault();
    //     e.target.reset()
    //     // fetch("http://localhost:3000/profile", {
    //     //     method: "GET",
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //         Authorization: `Bearer ${token}`,
    //     //     },
    //     // });

    //     // fetch("http://localhost:3000/login", {
    //     //     method: "POST",
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //         Accept: "application/json",
    //     //         // Authorization: `Bearer ${token}`,
    //     //     },
    //     //     body: JSON.stringify({ 
    //     //         user: { 
    //     //             username, 
    //     //             password
    //     //         }   
    //     //     })
    //     // })
    //     //     .then((response) => {
    //     //         if (response.ok) {
    //     //             response.json()
    //     //             .then((data) => {
    //     //                 onLogin(data.user)
    //     //                 // setLoggedIn(true)
    //     //                 localStorage.setItem("jwt", data.jwt);
    //     //                 history.push("/home")
    //     //             });
    //     //         } else {
    //     //             console.log("form incorrectly filled out")
    //     //         }
    //     //     })
    //     fetch('http://localhost:3000/login', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ user: { username, password } }),
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //             response.json().then((data) => {
    //                 // setUser(data.user)
    //                 onLogin(data.user);
    //                 localStorage.setItem("jwt", data.jwt);
    //                 history.push("/home")
    //             });
    //         } else {
    //             console.log("form incorrectly filled out")
    //         }
    //     })
    // }

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                Username:
                <input
                    className="login-inputs"
                    type="text"
                    id="username"
                    placeholder=" Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                Password:
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    placeholder=" Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>

            </form>
            <h4 className="login-error">{error}</h4>

        </div>
    )
}

export default Login