import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pokelist from './src/screens/Pokelist';
// import Pokedetails from './src/screens/Pokedetails';


//const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <Pokelist />
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Pokelist} />
        <Stack.Screen name="Details" component={Pokedetails} />
      </Stack.Navigator>
    </NavigationContainer>*/
  );
}


