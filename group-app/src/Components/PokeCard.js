import React from "react";
import {Card} from 'semantic-ui-react';

function PokeCard({ pokemon }) {
    return (
        <Card>
            <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front} alt='Oops' />
                <p>{pokemon.type}</p>
                <p>{pokemon.secondary}</p>
                
            </div>
            <span>
                <i className='icon heartbeat red' />
                {pokemon.hp}
            </span>
        </Card>
    )
}

export default PokeCard;