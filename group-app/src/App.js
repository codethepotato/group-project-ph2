import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import PokePage from "./Components/PokePage";
import PokeForm from './Components/PokeForm';
import NavBar from './Components/NavBar';
import RandomButton from './Components/RandomButton';
import { Switch, Route, Link } from 'react-router-dom';


const App = () => {

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
<<<<<<< HEAD
      <PokePage pokes = {allPokes}/>
=======
      <NavBar />             
      {/* <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/PokePage'>
          <About />
        </Route>
        <Route path='/RandomButton'>
          <Meow />
        </Route>
      </Switch> */}
      <PokePage pokemons={allPokes}/>
>>>>>>> 1c7e5e5a8777c403e6e9c981d3534bbddb35e6d8
      <PokeForm />
      <RandomButton />
    </div>
  );
}

export default App;
