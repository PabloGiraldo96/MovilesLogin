import styles from './css/styles.js';
import CarrosDiponibles from './screens/carrosDisponibles.js';
import RentaCarros from './screens/rentaCarros.js';
import RegistroUsuario from './screens/RegistroUsuario.js'
import { handleRegistro } from './screens/RegistroUsuario.js';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Arreglo de objetos para quemar los usuarios 

export const users = [{ username: 'Papablo', name: 'Pablo', password: 123456, rol: '1'
}, {
  username: 'jairito', name: 'Jairo ', password: 'Yoyo452', rol: '2'
},
 {
  username: 'Pedrolo', name: 'Pedro ', password: 'Lopez45', rol: '3'
},
]


// Instanciamiento de stackNavigator


const Stack = createNativeStackNavigator();

//Creacion de la función principal Login donde va la pantalla de inicio de sesión.

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let findUser = users.find(user => user.username == username && user.password == password)

// Validaciones regex para confirmar que escribe letras y numeros en los campos 

  const handleLogin = () => {

  const nameRegex = /^[A-Za-z]+$/; // Expresión regular para validar solo letras
  const passwordRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
  let isValidName = nameRegex.test(username);
  let isValidPassword = passwordRegex.test(password);

  if (findUser != undefined && isValidName && isValidPassword) {
    navigation.navigate('Home');
  } else {
    setError('Usuario o contraseña incorrectos');
  }

setUsername('');
setPassword('');

};

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
        </Card>
            <TouchableOpacity >
         <Text style = {styles.phrase} onPress={handleRegistro}>No tienes cuenta? Regístrate! </Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido </Text>
    </View>
  );
};


const BottomTab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Registro Usuario" component={RegistroUsuario} />
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