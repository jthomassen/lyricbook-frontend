import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/User'

function App() {

  const production = "https://lyricbook-backend.herokuapp.com/"
  const development = "http://localhost:3000/"
  const url = (process.env.NODE_ENV ? production : development)

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${url}/users`)
    .then((res) => res.json())
    .then(data => console.log(data))
  }, [])

  useEffect(() => {
    fetch(`${url}/lyrics`)
    .then((res) => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      <User/>
    </div>
  );
}

export default App;
