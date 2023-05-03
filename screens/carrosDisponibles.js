import styles from '../css/styles.js';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Arreglo vacío que vamos a ir llenando

export const carrosDisponibles = []
//Funcion default que vamos a exportar (Funciona similar a una clase)

export default function CarrosDiponibles(){

// Declaración de variables con su instancia de estado useState

const [placa, setPlaca] = useState('')
const [marca, setMarca] = useState('')
const [estado, setEstado] = useState('')
const [error, setError] = useState('');

// Función de guardar un carro en el arreglo. 

// Mostrar el carro Disponible; en la capa rentaCarros vamos a manejar ese Booleano a false.


const placaRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
const marcaRegex = /^[A-Za-z ]+$/; // Expresión regular para validar solo letras

// Funcion para buscar placa y confirmar si existe

let isValidPlaca = placaRegex.test(placa);
let isValidMarca = marcaRegex.test(marca)

    let guardarCarro = () =>{
        if(placa != "" && marca != ""){
			if(isValidPlaca && isValidMarca){
        	const carro = {
            placa: placa,
            marca: marca,
            estado: estado
            }
            carrosDisponibles.push(carro)
            setError("Carro guardado correctamente.")
			setPlaca('');
			setMarca('');
		} else{
		setError ("La marca debe ser letras únicamente")
		}
    }
        else {
            setError("Ingrese por favor los campos para registrar el carro.")
        }
    }


	let mostrarCarro = () => {
		if (placa !== ""){
			const carroEncontrado = carrosDisponibles.find(carro => carro.placa == placa)
				if(carroEncontrado){
				setMarca(carroEncontrado.marca)
				setEstado(true)
		}
			else {
				setError('No se encontró el carro')
			}	
	}
	else{
		setError('Ingrese la placa para poder buscar un carro.');
	}
}
    
// Funcion de limpiar los campos

	let limpiarCampos = () => {
	setPlaca('');
	setMarca('');
	setEstado('');
	setError('')
}


const findCarByPlaca = (placa) => {
  const carro = CarrosDiponibles.find(car => car.placa === placa);
  if (!carro) {
    return null; // si no existe el carro con esa placa, retorna null
  }
  return carro.estado ? carro :setError ("La placa que ingresaste ya está registrada"); // si el carro existe y está disponible, retorna el carro, de lo contrario retorna
}

    return (
        <View style={styles.container}>
		<Card style={styles.card}>
			<Text style={styles.title}>Agregar Carro</Text>
			<TextInput
				style={styles.textInput}
				label="Ingrese la placa del carro"
				mode='outlined'
				value={placa}
				onChangeText={placa => setPlaca(placa)}
		/>
		        {/*operador Ternario con native */}
        {error ?
         <Text style={styles.error}>{error}</Text> : 
          null}
		<TextInput
			style={styles.textInput}
			label='Ingrese marca del carro'
			mode='outlined'
			onChangeText={marca => setMarca(marca)}
			value={marca}
			/>
			<Text style={styles.text} value={estado}>{estado ? "El carro está disponible" : "No disponible"}</Text>
		
		<Button mode="contained" onPress={guardarCarro} style={styles.button}>
			Agregar Carro
		</Button>
		<Button mode="contained" onPress={mostrarCarro} style={styles.button}>
			Mostrar Carro
		</Button>
		<Button mode="contained" onPress={limpiarCampos} style={styles.button}>
			Limpiar Datos
		</Button>
	  </Card>
      </View>
    );
  };
