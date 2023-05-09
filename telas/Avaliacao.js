import { Button } from "@rneui/base";
import { View, Text } from "react-native";

export default function Avaliacao(props)
{

    return (
        <View>
            <Text>Imóvel Selecionado {JSON.stringify(props.selecionado)}</Text>
            <Button title="Voltar" color="red" onPress={() => { props.alterar(null)}}></Button>
        </View>
    )
}