import React from "react";
import { useState, useEffect } from 'react';
import PokeCard from "./PokeCard";
import {Card} from 'semantic-ui-react';

function PokePage({}) {
    const [allPokes, setAllPokes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/pokemon')
          .then((r) => r.json())
          .then(allPokes => setAllPokes(allPokes))
      }, []);

    const pokes = allPokes
    console.log(pokes)
    const allOfEm = pokes.map(pokeObj => {
        return <PokeCard key={pokes.id} pokemon={pokeObj} />
    })
    return (
        <Card.Group itemsPerRow={6}>
            <h1>Gotta Catch Em All </h1>
            {allOfEm}
        </Card.Group>
    )
}

export default PokePage;