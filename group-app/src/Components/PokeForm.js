import React, { useState } from "react";
import {Form} from 'semantic-ui-react';

function PokeForm(){
const [name, setName] = useState('')
const [hp, setHp] = useState('')
const [type, setType]= useState('')
const [secondaryType, setSecondaryType]= useState('')
cosnt [front, setFront]= useState('')
const [back, setBack] = useState('')

const handleSubmit= (e) => {
    e.preventDefault()
    const newPokemon = {
        Name: name,
        hp: hp,
        type: type,
        secondaryType: secondaryType,
        sprites: {
            front: front,
            back: back
        }
    }
    addPokemon(newPokemon)
}

    return(
        <div>
            <h2>Add A New Pokemon!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Name' placeholder='Name' name='name' />
                    <Form.Input fluid label='hp' placeholder='hp' name='hp' />
                    <Form.Input
                        fluid
                        label="Front Image URL"
                        placeholder='url'
                        name='frontUrl' />
                    <Form.Input
                        fluid
                        label="Back Image URL"
                        placeholder='url'
                        name='backUrl' />
                </Form.Group>
                <Form.Button>Submit!</Form.Button>
            </Form>
        </div>
    )
}

export default PokeForm;