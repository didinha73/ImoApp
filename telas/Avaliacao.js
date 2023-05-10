import { Button, Input } from "@rneui/base";
import { useState } from "react";
import { View, Text } from "react-native";
import { app } from '../firebase'
import {getFirestore, collection, doc, query, where, updateDoc} from "firebase/firestore";

const db = getFirestore(app);
export default function Avaliacao(props)
{

    const [valor, setValor] = useState(props.selecionado.valor_imovel);

    async function salvar()
    {
        const ref = doc(db, "imoveis", props.selecionado.id);
        await updateDoc(ref, {
            valor_imovel: valor,
            avaliado: true
        });
        props.alterar(null);

    }

    return (
        <View>
            <Text>Imóvel Selecionado</Text>
            <Text>{props.selecionado.codigo}</Text>
            <Text>{props.selecionado.endereco}</Text>
            <Input
                placeholder="Valor do Imovel"
                value={valor}
                onChangeText={(e) => setValor(e)}
            />
            <Button title="Salvar" color="success" onPress={salvar} />   
            <Button title="Voltar" color="warning" onPress={() => { props.alterar(null)}}></Button>
        </View>
    )
}