import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Arreglo vacío que vamos a ir llenando

let carros =[]

//Funcion default que vamos a exportar (Funciona similar a una clase)

export default function CarrosDiponibles(){

// Declaración de variables con su instancia de estado useState

    const [id, setId] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [motor, setMotor] = useState('')
    const [disponible, setDisponible] = useState('')

// Función de guardar un carro en el arreglo. 

// Agregar switch de disponible y validarlo cuando esté activado/desactivado.

    let guardarCarro = () =>{
        if(id != "" && marca != "" && modelo != "" && motor != "" ){
        const carro = {
            id: id,
            marca: marca,
            modelo: modelo,
            motor: motor,
            disponible: disponible
            }
            carros.push(carro)
            alert("Carro guardado correctamente.")
        }
        else {
            alert("Ingrese por favor los campos para registrar el carro.")
        }
    
    }

	let mostrarCarro = () => {
		if (id !== ""){
			const carroEncontrado = carros.find(carro => carro.id == id)
				if(carroEncontrado){
				setMarca(carroEncontrado.marca)
				setModelo(carroEncontrado.modelo)
				setMotor(carroEncontrado.motor)
				setDisponible(carroEncontrado.disponible)
		}
			else {
				alert('No se encontró el carro')
			}	
	}
	else{
		alert('Ingrese un Id para poder buscar un carro.')
	}
}






    
// Funcion de limpiar los campos

	let limpiarCampos = () => {
	setId('');
	setMarca('');
	setModelo('');
	setMotor('');
	setDisponible('');
	
}

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>Agregar Carro</Text>
        <TextInput
            label="Ingrese Id del carro"
            mode='outlined'
            value={id}
            onChangeText={id => setId(id)}
            style ={{margin: 10}}
      />
      
      <TextInput
          label='Ingrese marca del carro'
          mode='outlined'
          onChangeText={marca => setMarca(marca)}
          value={marca}
          style ={{margin: 10}}
        />
    
      <TextInput
          label='Ingrese modelo del carro'
          mode='outlined'
          onChangeText={modelo => setModelo(modelo)}
          value={modelo}
          style ={{margin: 10}}
        />
      
      <TextInput
          label='Ingrese motor o cilindraje del carro'
          mode='outlined'
          onChangeText={motor => setMotor(motor)}
          value={motor}
          style ={{margin: 10}}
        />
            {/* {error ? <Text style={styles.error}>{error}</Text> : null} */}

      <Button mode="contained" onPress={guardarCarro} style ={{marginBottom: 30}}>
        Agregar Carro
      </Button>
      <Button mode="contained" onPress={mostrarCarro} style ={{marginBottom: 30}}>
        Mostrar Carro
      </Button>
      <Button mode="contained" onPress={limpiarCampos}>
        Limpiar Datos
      </Button>

      </View>
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
