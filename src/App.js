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
  Switch, Route

} from 'react-router-dom'

function App() {

  const production = "https://lyricbook-backend.herokuapp.com/"
  const development = "http://localhost:3000/"
  const url = (process.env.NODE_ENV ? production : development)

  // const [users, setUsers] = useState([])
  const [lyrics, setLyrics] = useState([])

  useEffect(() => {
    fetch(`${url}/users`)
      .then((res) => res.json())
      .then(data => console.log(data))
  }, [])

  useEffect(() => {
    fetch(`${url}/lyrics`)
      .then((res) => res.json())
      .then(data => setLyrics(data))
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>

      <div className="app">







        <Switch>


          <Route exact path="/">
            <SigninHome />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard
              lyrics={lyrics}
            />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/lyric-view">
            <LyricView
              lyrics={lyrics}
            />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
