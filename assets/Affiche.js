import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Affiche({ route, navigation }) {
  const { nombre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nombre saisi : {nombre}</Text>
      <Text style={styles.subtitle}>Ceci est la page d’affichage</Text>

      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbe7',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
