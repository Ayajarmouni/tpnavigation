import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Accueil({ navigation }) {

  const [valeur, setValeur] = useState('');
  const [erreur, setErreur] = useState('');

  const handleChange = (text) => {
    // Filtrer : garder uniquement les chiffres
    const uniquementChiffres = text.replace(/[^0-9]/g, '');

    setValeur(uniquementChiffres);

    // Vérifier longueur
    if (uniquementChiffres.length !== 4) {
      setErreur("Le nombre doit contenir exactement 4 chiffres.");
    } else {
      setErreur("");
    }
  };

  const handlePress = () => {
    if (valeur.length === 4) {
      const nombre = parseInt(valeur); // conversion en int
      navigation.navigate('Affiche', { nombre: nombre });
    } else {
      setErreur("Veuillez entrer un nombre de 4 chiffres.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'écran d'accueil 🎉</Text>

      <TextInput
        style={styles.input}
        value={valeur}
        onChangeText={handleChange}
        keyboardType="numeric"  // Clavier chiffres
        maxLength={4}           // Bloque à 4 chiffres
        placeholder="Entrez un nombre (4 chiffres)"
      />

      {erreur !== "" && <Text style={styles.erreur}>{erreur}</Text>}

      <Text style={styles.text}>Appuyez pour vérifier.</Text>

      <Button title="Vérifier" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf4ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  input: {
    width: 200,
    height: 45,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: "white",
    marginBottom: 10,
  },
  erreur: {
    color: "red",
    marginBottom: 15,
    fontSize: 14,
  },
});
