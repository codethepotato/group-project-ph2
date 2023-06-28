import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import PokePage from "./Components/PokePage";
import PokeForm from './Components/PokeForm';
import Search from './Components/Search';
import RandomButton from './Components/RandomButton';

const App = () => {

  const [allPokes, setAllPokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then((r) => r.json())
      .then(allPokes => setAllPokes(allPokes))
  }, []);

  return (
    <div>
      <Header />
      <PokePage pokes = {allPokes}/>
      <PokeForm />
      <Search />
      <RandomButton />
    </div>
  );
}

export default App;
