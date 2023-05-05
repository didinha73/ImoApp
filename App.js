import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './telas/Login';
import Home from './telas/Home';

export default function App() {

  const[logado, setLogado] = useState(null);

  if(logado == true){
    return (
      <Home />
    )
  } else
  {
    return (
      <Login logado={setLogado}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
