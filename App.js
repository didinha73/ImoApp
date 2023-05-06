import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './telas/Login';
import Home from './telas/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  //useEffect só executa quando carrega a primeira vez
  useEffect(() => {

    async function carregar()
    {
        let usuario = await AsyncStorage.getItem("usuario")
        if(usuario)
        {
          usuario = JSON.parse(usuario);
          setLogado(true);
        }
    }

    if(logado != true)
    {
      carregar();
    }
    

  })

  const[logado, setLogado] = useState(null);

  if(logado == true){
    return (
      <Home logado={setLogado}/>
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
