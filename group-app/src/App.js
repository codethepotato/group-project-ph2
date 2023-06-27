//import logo from './logo.svg';

import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import PokeCard from './Components/PokeCard';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/pokemon');
        const data = await response.json();
        setPokemonData(data.pokemon);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {pokemonData.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
