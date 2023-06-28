import React from "react";
import PokeCard from "./PokeCard";
import {Card} from 'semantic-ui-react';

function PokePage({ pokemons }) {
    const allOfEm = pokemons.map(pokeObj => {
        return <PokeCard key={pokemons.id} pokemon={pokeObj} />
    })
    return (
        <Card.Group itemsPerRow={6}>
            <h1>Gotta Catch Em All </h1>
            {allOfEm}
        </Card.Group>
    )
}

export default PokePage;