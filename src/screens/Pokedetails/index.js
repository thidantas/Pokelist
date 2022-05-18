/*
import React, { useEffect, useState } from 'react';


export default function Pokedetails () {
    const [pokemons, setPokemons] = useState([])

useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/', {
    method: 'GET',
    headers: {
    'Accept': 'application/json'
    }
    })
    .then(response => response.json())
    .then(data => {
        setPokemons(data.results)      
    })
    }, [])
  
    return (
        <></>
    )
  }
  */
