import React from "react";
import { View, Text, Button, StyleSheet  } from "react-native";
import { HomeScreenNavigationProp } from "../types/types";
import { useNavigation } from "@react-navigation/native";

type Props = {
    navigation: HomeScreenNavigationProp;
  };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [count, setCount] = React.useState(0);
    
    return (
        <View style={styles.container}>
            <Text>Bem Vindo à Tela Inicial</Text>
            <Text>Contagem: {count}</Text>
            <Button title='Incrementar' onPress={() => setCount(count + 1)}></Button>
            <Button 
                title="Ir para Detalhes"
                onPress={() => navigation.navigate("Details", { itemId: 42 })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;