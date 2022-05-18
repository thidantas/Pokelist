import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Image, Text } from 'react-native';
import PokemonShow from '../../componentes/PokemonShow';

export default function App () {

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
    <SafeAreaView>
      <FlatList
      data={pokemons}
      keyExtractor={(pokemon) => pokemon.name}
      contentContainerStyle={{ flexGrow: 1 }}
      renderItem={PokemonShow}
      />
    </SafeAreaView>
  )
}
