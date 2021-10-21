// import './App.css';
import React, { useEffect, useState } from 'react';
import SigninHome from './components/SigninHome.js';
import Login from './components/Login';
import Signup from './components/Signup.js';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewLyricForm from './components/NewLyricForm.js';
import EditLyric from './components/EditLyric.js';
import {
  BrowserRouter as Router,
  Switch, Route, useHistory

} from 'react-router-dom'

function App() {

  // const production = "https://lyricbook-backend.herokuapp.com/"
  // const development = "http://localhost:3000/"
  // const url = (process.env.NODE_ENV ? production : development)

  const url = "http://localhost:3000/"

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [lyrics, setLyrics] = useState({})
  const [lyricShow, setLyricShow] = useState([])
  const [lyricClicked, setLyricClicked] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    // console.log("token: " + token)
    fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
        });
      } else {
        console.log("please log in")
      }
    });
  }, []);

  function addNewLyric(lyric) {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/lyrics`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...lyric, user_id: user.id })
    })
      .then(res => res.json())
      .then((data) => {
        setLyrics({data, ...lyrics})
      })
  }

  function deleteLyric() {
    console.log("button clicked")
  }

  function handleLogin(currentUser) {
    setUser(currentUser);
    setLoggedIn(true)
  }

  function handleLogout() {
    localStorage.clear()
    setUser(null);
    setLoggedIn(false)
  }

  function handleShowLyric(id) {
    setLyricShow(user.lyrics.find(lyric => lyric.id === id))
    setLyricClicked(true)
  }

  function handleShowAllLyrics() {
    setLyricClicked(false)
  }

  return (


    <Router basename={process.env.PUBLIC_URL}>

      <div className="app">

        <Switch>

          <Route exact path="/">
            <SigninHome />
          </Route>

          <Route exact path="/login">
            <Login
              handleLogin={handleLogin}
            />
          </Route>

          <Route exact path="/signup">
            <Signup
              handleLogin={handleLogin}
            />
          </Route>

          <Route exact path="/home">
            <Home
              onLogout={handleLogout}
              user={user}
            />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard
              user={user}
              onLogout={handleLogout}
              handleShowLyric={handleShowLyric}
              handleShowAllLyrics={handleShowAllLyrics}
              deleteLyric={deleteLyric}
              lyricClicked={lyricClicked}
              lyricShow={lyricShow}
            />
          </Route>

          <Route exact path="/profile">
            <Profile
              user={user}
              onLogout={handleLogout}
            />
          </Route>

          <Route exact path="/lyric-submission">
            <NewLyricForm
              addNewLyric={addNewLyric}
            />
          </Route>

          <Route exact path="/lyric-editor">
            <EditLyric />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
