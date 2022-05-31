import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function PokemonShow({pokemonName, pokemonUrl}) {
  const navigation = useNavigation();

  const pokemonNumber = pokemonUrl
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '');

  const imageUrl =
    'https://veekun.com/dex/media/pokemon/main-sprites/black-white/' +
    pokemonNumber +
    '.png';

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detalhes', {urlparam: pokemonUrl})}>
        <Image style={estilos.imagem} source={{uri: imageUrl}} />
      </TouchableOpacity>
      <View>
        <Text>Selecione seu Pokemon</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  imagem: {
    width: 90,
    height: 90,
    borderRadius: 6,
  },
});
