import React from 'react'
import { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import PokePage from "./Components/PokePage";
import PokeForm from './Components/PokeForm';
import NavBar from './Components/NavBar';
import RandomButton from './Components/RandomButton';



function App() {

  const [allPokes, setAllPokes] = useState([])
  // const [page, setPage] = useState('/')

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then((r) => r.json())
      .then(allPokes => setAllPokes(allPokes))
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path='/PokeForm'>
          <PokeForm />
        </Route>
        <Route path='/PokePage'>
          <PokePage pokemons={allPokes} />
        </Route>
        <Route path='/RandomButton'>
          <RandomButton />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
