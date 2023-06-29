import React from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import PokePage from "./Components/PokePage";
import PokeForm from './Components/PokeForm';
import NavBar from './Components/NavBar';
import RandomButton from './Components/RandomButton';



function App() {

  const [allPokes, setAllPokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then((r) => r.json())
      .then(allPokes => setAllPokes(allPokes))
  }, []);

  const addPokemon = (newPokemon) => {
    setAllPokes([...allPokes, newPokemon])
  }

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path='/PokeForm' element={<PokeForm addPokemon={addPokemon}/>}></Route>
          <Route path='/PokePage' element={<PokePage pokemons={allPokes} />}></Route>
          <Route path='/RandomButton' element={<RandomButton />}></Route>
        </Routes>
    </div>
  );
}

export default App;
