import styles from './css/styles.js';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarrosDiponibles from './screens/carrosDisponibles.js';
import RentaCarros from './screens/rentaCarros.js';


// Arreglo de objetos para quemar los usuarios 

let users = [{ username: 'Papablo', name: 'Pablo', password: 123456, rol: '1'
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

  const handleLogin = () => {
    if (findUser != undefined) {
      navigation.navigate('Home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
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
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Ingresar
        </Button>
      </Card>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
    </View>
  );
};


const BottomTab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

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