import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        label="Nombre de usuario"
        mode='outlined'
        value={username}
        onChangeText={username => setUsername(username)}
        style ={{margin: 30}}
      />
      <TextInput
        label="Contraseña"
        mode='outlined'
        value={password}
        onChangeText={password => setPassword(password)}
        style ={{marginBottom: 40}}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button mode="contained" onPress={handleLogin} >
        Ingresar
      </Button>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;
