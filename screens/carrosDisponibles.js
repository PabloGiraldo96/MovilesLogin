import styles from '../css/styles.js';
import {carrosRentados, RentaCarros} from './rentaCarros.js';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Card, Modal, Portal, Provider	} from 'react-native-paper';

// Arreglo vacío que vamos a ir llenando
export const Carros = []

//Funcion default que vamos a exportar (Funciona similar a una clase)
export default function CarrosDiponibles(){

// Declaración de variables con su instancia de estado useState
const [placa, setPlaca] = useState('')
const [marca, setMarca] = useState('')
const [estado, setEstado] = useState('')
const [error, setError] = useState('');
const [visible, setVisible] = React.useState(false);
const [carrosDisponibles, setCarrosDisponibles] = useState([]);

// Función de guardar un carro en el arreglo. 
// Mostrar el carro Disponible; en la capa rentaCarros vamos a manejar ese Booleano a false.

let guardarCarro = () =>{
const placaRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
const marcaRegex = /^[A-Za-z 0-9]+$/; // Expresión regular para validar solo letras

// Funcion para buscar placa y confirmar si existe

if(placa !="" ){
    if(Carros.find(Carros => Carros.placa == placa) == undefined){
		let isValidPlaca = placaRegex.test(placa);
		let isValidMarca = marcaRegex.test(marca)
        	if(isValidPlaca && isValidMarca && marca != ""){
            	const carro = {	
                	placa: placa,
                	marca: marca,
                	estado: true}
             	Carros.push(carro)
            	alert(`el carro ${carro.marca} de placa ${carro.placa} guardado correctamente`)
            	console.log(Carros)
				setPlaca('');
				setMarca('');  
			} else { setError("Error en la placa o marca")}
        } else { setError("El carro ya está registrado")}
	} else{ setError ("Complete los campos por favor")}
}

const carroRentado = carrosRentados.find(carroRentado => carroRentado.placaRenta == placa)

console.log(carroRentado)

let mostrarCarro = () => {
	if (placa !== ""){
		const carroEncontrado = Carros.find(carro => carro.placa == placa)
				if(carroEncontrado){
				setMarca(carroEncontrado.marca)
				setEstado(true)
			} else { setError('No se encontró el carro')}	
	} else { setError('Ingrese la placa para poder buscar un carro.')}
	if(carroRentado){
		Carros.estado = false;
		setEstado(false)
	}
}

//Listar carros disponibles 

let listarCarrosDisponibles = () => {
// Modal de la función listarCarrosDisponibles
 const showModal = () => setVisible(true);
 const hideModal = () => setVisible(false);
 const containerStyle = {backgroundColor: 'white', padding: 20};

const carrosDisponibles = Carros.filter(carro => carro.estado);
  setCarrosDisponibles(carrosDisponibles);
  console.log(carrosDisponibles);
  showModal();

 return (
	<View>
		<Provider>
		<Portal>
			<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
			{carrosDisponibles.map((carro, index) => (
				<Text key={index}> {carrosDisponibles} </Text>
			))}
			</Modal>
		</Portal>
		</Provider>
	</View>
 	)
}


// Funcion de limpiar los campos

	let limpiarCampos = () => {
	setPlaca('');
	setMarca('');
	setEstado('');
	setError('')
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
			<Text style={styles.text}>{estado ? "El carro está disponible" : "No disponible"}</Text>
		<Button mode="contained" onPress={guardarCarro} style={styles.button}>
			Agregar Carro
		</Button>
		<Button mode="contained" onPress={mostrarCarro} style={styles.button}>
			Mostrar Carro
		</Button>
		<Button mode="contained" onPress={listarCarrosDisponibles} style={styles.button}>
		Mostrar carros disponibles

		</Button>
		<Button mode="contained" onPress={limpiarCampos} style={styles.button}>
			Limpiar Datos
		</Button>
	  </Card>
      </View>
    );
};
