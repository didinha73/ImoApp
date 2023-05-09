import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, Header } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from "@rneui/base";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
import Avaliacao from "./Avaliacao";

import {app} from "../firebase";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";

const db = getFirestore(app);

export default function Home(props)
{
    const [casas, setCasas] = useState([]);
    const [selecionado, setSelecionado] = useState(null);

    async function sair()
    {
        await AsyncStorage.clear();
        props.logado(false);

    }

    async function carregarCasas(){

        let imoveis = [];
        const ref = collection(db, "imoveis");
        const retorno = await getDocs(ref);
        retorno.forEach(item => {
            let dados = item.data();
            dados.id = item.id;
            imoveis.push(dados);
            
        });
        console.log(imoveis);
        setCasas(imoveis);
    }

    useEffect(()=>{

        if (casas.length == 0){
            carregarCasas();
        }
        
    });


    let listaImoveis = casas.map((item) =>{
        return (
            <Pressable onPress={() => { setSelecionado(item) }} key={item.id}>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItemTitle>{item.codigo}-{item.descricao}</ListItemTitle>
                        <ListItemSubtitle>{item.endereco}</ListItemSubtitle>
                    </ListItem.Content>
                </ListItem>
        </Pressable>

        )
    })

    const tela = (selecionado)? <Avaliacao selecionado={selecionado} alterar={setSelecionado} /> : listaImoveis;
    return (

        <SafeAreaView>
            <Header
                leftComponent={{icon: 'menu', color: '#fff'}}
                centerComponent={{ text: 'Avaliação', style: {color: '#fff'}}}
                rightComponent={{icon: 'logout', color: '#fff'}}
            />
            <View>
                {tela}                
            </View>
            <Button title="Sair" onPress={sair}></Button>
            <Button title="Teste Banco" onPress={carregarCasas}></Button>
        </SafeAreaView>
    )
}
const css = StyleSheet.create({
    tela: {

    }
})