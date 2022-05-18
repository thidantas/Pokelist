import React from 'react';
import { View , Image, Text, TouchableOpacity } from 'react-native';

export default function PokemonShow(props) {
    //{"index": 9, "item": {"name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/"}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}

    const { name, url } = props.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
  
    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/'+pokemonNumber+'.png'
     return (
      <View style={{ flexDirection: 'row' }}> 
        <TouchableOpacity>
        <Image style={{width: 60, height: 60}} source={{ uri: imageUrl }}/> 
        </TouchableOpacity>
        <Text>{name}</Text> 
      </View>
    )
  }
  