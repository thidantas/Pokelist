import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pokelist from '../screens/Pokelist';
import Pokedetails from '../screens/Pokedetails';

const Stack = createNativeStackNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista de Pokemons">
        <Stack.Screen name="Lista de Pokemons" component={Pokelist} />
        <Stack.Screen name="Detalhes" component={Pokedetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
