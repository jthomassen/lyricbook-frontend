// import './App.css';
import React, { useEffect, useState } from 'react';
import SigninHome from './components/SigninHome.js';
import Login from './components/Login';
import Signup from './components/Signup.js';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import LyricView from './components/LyricView';
import {
  BrowserRouter as Router,
  Switch, Route, useHistory

} from 'react-router-dom'

function App() {

  const production = "https://lyricbook-backend.herokuapp.com/"
  const development = "http://localhost:3000/"
  const url = (process.env.NODE_ENV ? production : development)

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [lyric, setLyric] = useState({})

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token)
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

  function handleLogin(currentUser) {
    setUser(currentUser);
    setLoggedIn(true)
  }

  function handleLogout() {
    localStorage.clear()
    setUser(null);
    setLoggedIn(false)
  }

  function handleLyricClick(id) {
    setLyric(user.lyrics.find(lyric => lyric.id === id))
    console.log(lyric)
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
            <Home onLogout={handleLogout} />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard
              user={user}
              onLogout={handleLogout}
              handleLyricClick={handleLyricClick}
            />
          </Route>

          <Route exact path="/profile">
            <Profile
              user={user}
              onLogout={handleLogout}
            />
          </Route>

          <Route exact path="/lyric-view">
            <LyricView
              user={user}
            />
          </Route>


        </Switch>

      </div>
    </Router>

  );
}

export default App;
