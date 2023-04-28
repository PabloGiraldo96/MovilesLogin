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
}

});


export default styles;