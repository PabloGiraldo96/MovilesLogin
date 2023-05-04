import React, { useState } from 'react';
import styles from '../css/styles.js';
import { View, Text } from 'react-native';
import { TextInput, Button, Card, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {Carros, carrosDisponibles} from './carrosDisponibles.js';
import { users } from '../App.js';

// Arreglo vacío de carros Rentados

let carrosRentados =[]

export default function RentaCarros(){

// Declaración de variables con su instancia de estado useState

    const [numeroRenta, setNumeroRenta] = useState('')
    const [placaRenta, setplacaRenta] = useState('')
    const [usernameRenta, setusernameRenta] = useState('')
    const [fechaRenta, setFechaRenta] = useState('')
	const [error, setError] = useState('');
	const [checked, setChecked] = React.useState(false);

// Funcion de encontrar el carro y si está disponible guardarlo, sino, mostrar mensaje que no está disponible

let guardarCarroRentado = () => {

let carro = Carros.find(carro => carro.placa == placaRenta)
		
let userExists = users.find(user => user.username == usernameRenta)

let estadoExist = Carros.find(carro => carro.estado == true)

  let numeroRenta = 0;

	if(placaRenta !="" && usernameRenta !="" && fechaRenta !=""){
		if(!carro){
			if(!userExists){
				const renta = {
					numeroRenta: numeroRenta +=1,
					placaRenta: placaRenta,
					usernameRenta: usernameRenta,
					fechaRenta: fechaRenta
			};
				carrosRentados.push(renta);
				estadoExist = false
				alert("Renta guardada correctamente.");
				setplacaRenta('');
				setusernameRenta('');
				setFechaRenta('');	
		}
			else{
			setError('El usuario no existe')		
	}
}			else {
			setError('La placa no existe')
			}
		}else{
		setError('Por favor ingrese los campos')
	}
	console.log(carrosRentados);
  };

// Funcion de limpiar los campos

	let limpiarCampos = () => {
	setError('');
	setplacaRenta('');
	setusernameRenta('');
	setFechaRenta('');
	setError('')	
}

// Funcion de revisar si el checkbox está checkeado para cambiar el estado del carro en la pantalla CarrosDisponibles

  return (
        <View style={styles.container}>
		<Card style={styles.card}>
			<Text style={styles.title}>Renta de carro </Text>
			<TextInput
				style={styles.textInput}
				label="Ingrese la placa del carro"
				mode='outlined'
				value={placaRenta}
				onChangeText={placaRenta => setplacaRenta(placaRenta)}
		/>
				        {/*operador Ternario con native */}
        {error ?
         <Text style={styles.error}>{error}</Text> : 
          null}

		<TextInput
			style={styles.textInput}
			label='Ingrese el usuario de la renta'
			mode='outlined'
			onChangeText={usernameRenta => setusernameRenta(usernameRenta)}
			value={usernameRenta}
			/>

		<TextInput
			style={styles.textInput}
			label='Ingrese la fecha de la renta'
			mode='outlined'
			onChangeText={fechaRenta => setFechaRenta(fechaRenta)}
			value={fechaRenta}
			/>
		<Text style = {styles.text} >Presione el cuadro para reservar el carro </Text>
		
		<Checkbox
			status={checked ? 'checked' : 'unchecked'}
			onPress={() => {
			setChecked(!checked);
			Carros.estado = false;
			}}
			/>		
		<Button mode="contained" onPress={guardarCarroRentado} style={styles.button}>
			Guardar Renta
		</Button>
		{/*<Button mode="contained" onPress={mostrarCarro} style={styles.button}>
			Mostrar Carro
		</Button>*/}
		<Button mode="contained" onPress={limpiarCampos} style={styles.button}>
			Limpiar Datos
		</Button>
	  </Card>
      </View>
    );
  };