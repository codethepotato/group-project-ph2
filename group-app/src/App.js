import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import PokePage from "./Components/PokePage";
import PokeForm from './Components/PokeForm';
import NavBar from './Components/NavBar';
import RandomButton from './Components/RandomButton';
import { Switch, Route, Link } from 'react-router-dom';


function App() {

  const [allPokes, setAllPokes] = useState([])
  // const [page, setPage] = useState('/')

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then((r) => r.json())
      .then(allPokes => setAllPokes(allPokes))
  }, []);

  return (
    <div>
      <Header />
      <PokePage pokemon = {allPokes}/>
      <PokeForm />
      <RandomButton />
    </div>
  );
}

export default App;
