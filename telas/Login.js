import { Button, Text, TextInput, View } from "react-native";
import { app } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
                <TextInput onChangeText={ (evento) => setEmail(evento) } />
                <Text>Senha</Text>
                <TextInput 
                    secureTextEntry={true} 
                    onChangeText={ (evento) => setSenha(evento) } />
                <Button title="Entrar" onPress={logar}/>
            </View>
        </SafeAreaView>
    )
}