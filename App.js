import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Accueil from './assets/Accueil.js';
import Affiche from './assets/Affiche.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Affiche" component={Affiche} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
