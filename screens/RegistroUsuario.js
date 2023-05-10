import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { users } from '../App.js';
import styles from '../css/styles.js';


const RegistroUsuario = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');	
  const [error, setError] = useState('');

  const handleRegistro = () => {
    const nameRegex = /^[A-Za-z ]+$/; // Expresión regular para validar solo letras

    const passwordRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
    let isValidName = nameRegex.test(username);
    let isValidPassword = passwordRegex.test(password);

// Validaciones de campos en blanco

    if (name != "" && username != "" && password != ""){
      // Validaciones de que el nombre si sean solo letras y la contraseña letras y numeros. 
        if(isValidName && isValidPassword){
// Validacion para confirmar que usuario no existe
          if(users.find(user => user.username == username) == undefined){
// Sí pasa las validaciones, entonces registra un nuevo usuario
          const user = {
            name: name,
            username: username,
            password: password
            }
            users.push(user)
              setError("Usuario guardado correctamente.");
              setName('');
              setUsername('');
              setPassword('');
            navigation.navigate('Login');
      } else { setError("El usuario ya existe")}
    } else { setError('El nombre solo permite letras y espacios')}
  } else { setError('Debe llenar los campos')}
          setName('');
          setUsername('');
          setPassword('');
          console.log(users);
}



  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Registro de usuario</Text>
        <TextInput
          style={styles.textInput}
          label="Ingrese Nombre"
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
        {error ?
         <Text style={styles.error}>{error}</Text> : 
          null}
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
