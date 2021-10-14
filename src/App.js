import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/User'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      Hello
    </div>
  );
}

export default App;
