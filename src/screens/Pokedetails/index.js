import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default function Pokedetails(navigation) {
  const {urlparam} = navigation.route.params;

  const [name, setName] = useState([]);
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);

  useEffect(() => {
    fetch(urlparam, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setName(data.name);
        setHeight(data.height);
        setWeight(data.weight);
      });
  }, [urlparam]);

  return (
    <SafeAreaView>
      <View>
        <Text style={estilos.text}>Nome: {name}</Text>
        <Text style={estilos.text}>Peso: {weight}</Text>
        <Text style={estilos.text}>Altura: {height}</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
});
