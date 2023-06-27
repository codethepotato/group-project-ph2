//import logo from './logo.svg';

import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import PokeCard from './Components/PokeCard';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

<<<<<<< HEAD
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
=======
  // const [allPokes, setAllPokes] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/pokemon')
  //     .then((r) => r.json())
  //     .then((allPokes) => console.log(allPokes))
  // }, []);
>>>>>>> e8df88d6941eabc748cd634f9b5039d45fe5bf7a

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
