import { View, StyleSheet } from "react-native";
import { Button, Text, Input as TextInput } from '@rneui/themed';
import { app } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login( props )
{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(null);

    async function logar()
    {
        
        try {
            const auth = getAuth(app);
            const resposta = await signInWithEmailAndPassword(auth, email, senha);
            const usuario = JSON.stringify(resposta);

            await AsyncStorage.setItem("usuario",usuario);

            props.logado(true);
            
        } catch (e)
        {
            console.log(e, email);
            setErro(true);
        }
        
    }

    return (
        <SafeAreaView>
            <View>
                { (erro) ? <Text>Usuário ou Senha Inválidos</Text> : null }

                <Text>Email</Text>
                <TextInput 
                    placeholder="E-mail"
                    onChangeText={ (evento) => setEmail(evento) } />
                <Text>Senha</Text>
                <TextInput 
                    placeholder="Senha"
                    secureTextEntry={true} 
                    onChangeText={ (evento) => setSenha(evento) } />
                <Button title="Entrar" onPress={logar}/>
            </View>
        </SafeAreaView>
    )
}