import React from "react";
import PokeCard from "./PokeCard";
import { Card } from "semantic-ui-react";

function PokePage({pokemon}) {
    const pokemonComponents = pokemon.map(pokemonObject => {
        return <PokeCard key={pokemonObject.id} pokemon={pokemonObject} />
    })

    return (
        <div>
            <Card.Group itemsPerRow={6}>
                {pokemonComponents}
            </Card.Group>
        </div>
    )
}

export default PokePage;