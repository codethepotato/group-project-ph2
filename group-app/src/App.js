import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {

  // const [allPokes, setAllPokes] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/pokemon')
  //     .then((r) => r.json())
  //     .then((allPokes) => console.log(allPokes))
  // }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
