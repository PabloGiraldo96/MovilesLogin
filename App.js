import styles from './css/styles.js';
import CarrosDiponibles from './screens/carrosDisponibles.js';
import RentaCarros from './screens/rentaCarros.js';
import RegistroUsuario from './screens/RegistroUsuario.js';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Instanciamiento de stackNavigator

const Stack = createNativeStackNavigator();

export const users = []

//Creacion de la función principal Login donde va la pantalla de inicio de sesión.

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    navigation.navigate('Registro Usuario');
  };
// Funcion de comparar el usuario ingresado con el usuario del arreglo

  let findUser = users.find(user => user.username == username && user.password == password)

  const handleLogin = () => {

  const nameRegex = /^[A-Za-z]+$/; // Expresión regular para validar solo letras
  const passwordRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
  let isValidName = nameRegex.test(username);
  let isValidPassword = passwordRegex.test(password);

  if (findUser != undefined && isValidName && isValidPassword) {
    navigation.navigate('Home');
    setUsername('');
    setPassword('');
 
  } else {
    setError('Usuario o contraseña incorrectos');
  }
};



// Funcion limpiar campos

	let limpiarCampos = () => {
	setUsername('');
	setPassword('');
	setError('')
}

  return (

    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Iniciar sesión</Text>
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
        {/*operador Ternario con native */}
        {error ?
         <Text style={styles.error}>{error}</Text> : 
          null}
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Ingresar
          </Button>
        <Button mode="contained" onPress={limpiarCampos} style={styles.button}>
          Limpiar Datos
        </Button>
        </Card>
            <TouchableOpacity >
         <Text style = {styles.phrase} onPress={handleRegister}>No tienes cuenta? Regístrate! </Text>
      </TouchableOpacity>
    </View>
  );
};

 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido </Text>
      <Text style={styles.phrase}>Ingresa los carros en la opción inferior.</Text>
    </View>
  );
};


const BottomTab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" 
        component={Login} />
      <Stack.Screen name="Home" 
        component={HomeScreen} />
      <Stack.Screen name="Registro Usuario" 
        component={RegistroUsuario} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};


// Navigation container, las tres pantallas que se requieren, Usuario, Carros, Rentar carro. 

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Usuario" component={MainStackNavigator} options={{headerShown:false
        }}/>
        <BottomTab.Screen name="Carros Disponibles" component={CarrosDiponibles} />
        <BottomTab.Screen name="Rentar Carro" component={RentaCarros} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;