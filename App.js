import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Duolingo-logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Learn a language for free.</Text>
      <Text style={styles.subtitle}>Forever.</Text>
      <TouchableOpacity style={[styles.getStartedButton, styles.buttonBorder]}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.alreadyHaveAccountButton, styles.buttonBorder]}>
        <Text style={styles.alreadyHaveAccountText}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#808080',
    fontWeight: 'bold',
    fontFamily: 'comic sans',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: '#007F60',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  getStartedText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  alreadyHaveAccountButton: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  alreadyHaveAccountText: {
    color: '#007F60',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonBorder: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});

export default App;
