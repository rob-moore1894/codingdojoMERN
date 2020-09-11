import React, { useState } from 'react'

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState("")

    const callPokemon = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log("Successful Call")
                return response.json()
            }).then(response => {
                console.log(response)
                setPokemon(response)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <input type="submit" value="Fetch Pokemon" onClick={callPokemon} />
        </div>
    )
}

export default FetchPokemon