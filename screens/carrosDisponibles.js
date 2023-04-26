import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


let carros =[]

export default function CarrosDiponibles(){

    const [id, setId] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [motor, setMotor] = useState('')
    const [disponible, setDisponible] = useState('')

    let guardarCarro = () =>{
        if(id != "" && marca != "" && modelo != "" && motor != "" && disponible != "" ){
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

      <TextInput
          label='Ingrese motor o cilindraje del carro'
          mode='outlined'
          onChangeText={disponible => setDisponible(disponible)}
          value={disponible}
          style ={{margin: 10}}
        />
            {/* {error ? <Text style={styles.error}>{error}</Text> : null} */}
      <Button mode="contained" onPress={guardarCarro} >
        Agregar carro
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