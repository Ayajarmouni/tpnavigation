import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Accueil from './screens/Accueil';
import Affiche from './screens/Affiche';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        
        <Stack.Screen 
          name="Accueil" 
          component={Accueil} 
          options={{ title: "Accueil" }}
        />

        <Stack.Screen 
          name="Affiche" 
          component={Affiche}
          options={{ title: "Résultat" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
