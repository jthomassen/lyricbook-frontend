import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // const [user, setUser] = useState(null)

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
