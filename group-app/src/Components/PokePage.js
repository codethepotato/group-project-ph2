import React from "react";
import { useState, useEffect } from 'react';
import PokeCard from "./PokeCard";
import { Card } from 'semantic-ui-react';


function PokePage({ pokemons }) {
    const allOfEm = pokemons.map(pokeObj => {
        return <PokeCard key={pokeObj.id} pokemon={pokeObj} />
    })
    return (
        <div id='poke-container'>
            <h1>Gotta Catch Em All </h1>
            <Card.Group itemsPerRow={6}>
                {allOfEm}
            </Card.Group>
        </div>
    )
}

export default PokePage;

