import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';


export default class Welcome extends Component {
  static navagationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Bem-Vindo</Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, precisamos que você informe seu usuário no Github
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
