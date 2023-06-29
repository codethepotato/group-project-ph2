import React, { useState } from 'react';
import axios from 'axios';

const RandomPokemonButton = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);

  const handleButtonClick = async () => {
    try {
      
      const response = await axios.get('db.json');
      const pokemonList = response.data;

      
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      const selectedPokemon = pokemonList[randomIndex];

      
      setRandomPokemon(selectedPokemon);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Random Pokémon</button>
      {randomPokemon && (
        <div>
          <h2>You found a {randomPokemon.name}!:</h2>
          
          <p>{randomPokemon.type}</p>
          <p>{randomPokemon.secondaryType}</p>
          <p>{randomPokemon.hp}</p>
          
         
        </div>
      )}
    </div>
  );
};

export default RandomPokemonButton;
