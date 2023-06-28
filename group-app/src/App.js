//import logo from './logo.svg';

import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
//import PokeCard from './Components/PokeCard';

const App = () => {
  const [ pokemonsArray, setPokemonsArray ] = useState( [] )

  const addPokemon = newPokemon => {
    const theNewArray = [ newPokemon, ...pokemonsArray ]
    setPokemonsArray( theNewArray )
  } 

  useEffect( () => {
    fetch( 'http://localhost:3000/pokemon' )
      .then( r => r.text() )
      .then( pokemonsFromFetch => {
        console.log(pokemonsFromFetch)
      } )
  }, [] )

 

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
