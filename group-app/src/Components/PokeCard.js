import React, { useState } from "react";
import {Card} from 'semantic-ui-react';

function PokeCard({ pokemon }) {
    const [cardFace, setCardFace] = useState(true)
    const whatever = () => {
        setCardFace(!cardFace)
    }
    return (
        <Card>
            <div>
                <h3>{pokemon.name}</h3>
                <img src={cardFace ? pokemon.sprites.front : pokemon.sprites.back} 
                    onClick={whatever} alt='Oops' />
                <p>{pokemon.type}</p>
                <p>{pokemon.secondaryType}</p>
            </div>
            <span>❤️{pokemon.hp}</span>
        </Card>
    )
}

export default PokeCard;

