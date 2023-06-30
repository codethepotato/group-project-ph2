import React, { useState } from "react";
import {Card, Image, Icon} from 'semantic-ui-react';

function PokeCard({ pokemon }) {
    const [cardFace, setCardFace] = useState(true)
    const whatever = () => {
        setCardFace(!cardFace)
    }
    return (
        <Card>
            <Image src={cardFace ? pokemon.sprites.front : pokemon.sprites.back} 
                    onClick={whatever} alt='Oops' wrapped ui={false}/>
            <Card.Content>
            <Card.Header>{pokemon.name}</Card.Header>
            <Card.Meta>
                <span>{pokemon.secondaryType}</span>
            </Card.Meta>
            <Card.Description>{pokemon.type}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon className='icon heartbeat red' />{pokemon.hp}
                </a>
            </Card.Content>
        </Card>
    )
}

export default PokeCard;

          
                