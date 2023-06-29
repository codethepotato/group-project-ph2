import React, { useState } from "react";
import { Form } from 'semantic-ui-react';

function PokeForm() {
    const [name, setName] = useState('')
    const [hp, setHp] = useState('')
    const [type, setType] = useState('')
    const [secondaryType, setSecondaryType] = useState('')
    cosnt [front, setFront] = useState('')
    const [back, setBack] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPokemon = {
            name: name,
            hp: hp,
            type: type,
            secondaryType: secondaryType,
            sprites: {
                front: front,
                back: back,
            }
        }
    }
    fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPokemon)
    })
        .then((r) => r.json())
        .then(newPokemon => addPokemon(newPokemon))

    return (
        <div>
            <h2>Add A New Pokemon!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        onChange={e => setName(e.target.value)}
                        fluid label='Name'
                        placeholder='Name'
                        name='name' />
                    <Form.Input
                        onChange={e => setHp(e.target.value)}
                        fluid label='hp'
                        placeholder='hp'
                        name='hp' />
                    <Form.Input
                        onChange={e => setType(e.target.value)}
                        fluid label='Type'
                        placeholder='Type'
                        name='type' />
                    <Form.Input
                        onChange={e => setSecondaryType(e.target.value)}
                        fluid label='Secondary Type'
                        placeholder='Secondary Type'
                        name='Seconday Type' />
                    <Form.Input
                        onChange={e => setFront(e.target.value)}
                        fluid
                        label="Front Image URL"
                        placeholder='url'
                        name='frontUrl' />
                    <Form.Input
                        onChange={e => setBack(e.target.value)}
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