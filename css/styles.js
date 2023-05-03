import { StyleSheet } from 'react-native';

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
  phrase: {
    fontSize: 18,
    color: 'blue',
    marginTop: 25,
  },
  text: {
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  card: {
    width: '88%',
    padding: 10,
  },
  textInput:{
	marginBottom: 20,
},
  button:{
    marginTop: 20,
    textTransform: "uppercase",
    backgroundColor: '#162C3B',
      backdropFilter: blur('10px'),
    border: 'none',
    borderRadius: '10px',
    color: '#FFFFFF',
},
  mensaje: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


export default styles;