import { View, Text } from "react-native";
import { Button } from '@rneui/themed';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home(props)
{
    async function sair()
    {
        await AsyncStorage.clear();
        props.logado(false);

    }
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
                <Button title="Sair" onPress={sair}></Button>
            </View>
        </SafeAreaView>
    )
}