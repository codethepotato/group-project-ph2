import React from "react";
import {Card, Icon, Image} from 'semantic-ui-react';

function PokeCard({ pokemon }) {
    return (
        <Card style={{width: '18rem'}}>
            <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites['front']} alt='Oops' />
                <p>{pokemon.type}</p>
                <p>{pokemon.secondaryType}</p>
            </div>
            <span>
                <i className='icon heartbeat red' />
                {pokemon.hp}
            </span>
        </Card>
    )
}

export default PokeCard;

