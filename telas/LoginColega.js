import { TextInput, Text, View, StyleSheet } from "react-native"
import { Button } from '@rneui/themed';

import { app } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login( props ) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(null);

    async function logar() {

        console.log(email, senha)
        try {
            const auth = getAuth(app)
            const resposta = await signInWithEmailAndPassword(auth, email, senha);
            
            const usuario = JSON.stringify(resposta);

            await AsyncStorage.setItem("usuario", usuario);

            props.logado(true);
        } catch (e)
        {
            setErro(true);
        }
    }

    return (
        <View style={[css.login, css.fundo]} >

            <Text style={css.textos} >E-mail</Text>
            <TextInput style={css.input} placeholder="E-mail" onChangeText={(evento) => setEmail(evento)} />

            <Text style={css.textos} >Senha</Text>
            <TextInput style={css.input} secureTextEntry={true} placeholder="Senha" onChangeText={(evento) => setSenha(evento)} />

            { (erro) ? <Text style={css.textoErro} >Usuário ou senha inválidos</Text> : null }

            <Button buttonStyle={{borderRadius: 40, borderColor: "black", marginTop: 25, fontSize: 25, borderWidth: 15, backgroundColor: "darkblue", borderColor: "darkblue"}} 
            titleStyle={{fontSize: 25}} title="Entrar" onPress={ logar } />
        </View>
    )
}

const css = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    textos: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        padding: 25,
    },
    fundo: {
        height: 100,
        backgroundColor: "darkslateblue",
    },
    input: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
    textoErro: {
        textAlign: "center",
        fontSize: 15,
        color: "red",
        marginTop: 10,
    }
})