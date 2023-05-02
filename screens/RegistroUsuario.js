import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../css/styles.js';

const RegistroUsuario = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');	

  const handleRegistro = () => {
    const nameRegex = /^[A-Za-z ]+$/; // Expresión regular para validar solo letras
    const passwordRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
    let isValidName = nameRegex.test(username);
    let isValidPassword = passwordRegex.test(password);

    if (!isValidName) {
      setError('El usuario solamente permite letras o espacios')
    } else if(!isValidPassword){
      setError('La contraseña solo permite numeros y letras');
    }else {
      navigation.navigate('Login');
      setUsername('');
      setPassword('');
    }
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Registro de usuario</Text>
        <TextInput
          style={styles.textInput}
          label="Nombre completo"
          mode='outlined'
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={styles.textInput}
          label="Nombre de usuario"
          mode='outlined'
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style={styles.textInput}
          label="Contraseña"
          mode='outlined'
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry
        />
        <Button mode="contained" onPress={handleRegistro} style={styles.button}>
          Registrarse
        </Button>
      </Card>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.phrase}>Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistroUsuario;
