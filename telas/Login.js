import { Button, Text, TextInput, View } from "react-native";
import { app } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login()
{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function logar()
    {
        const auth = getAuth(app);
        const resposta = await signInWithEmailAndPassword(auth, email, senha);
        console.log(resposta);
    }

    return (
        <View>
            <Text>Email</Text>
            <TextInput onChange={(evento) => setEmail(evento.target.value)}/>
            <Text>Senha</Text>
            <TextInput onChange={(evento) => setSenha(evento.target.value)}/>

            <Button title="Entrar" onPress={logar}/>
        </View>
    )
}