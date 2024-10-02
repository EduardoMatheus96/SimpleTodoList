import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "../types/types";
import { View, Text, Button, StyleSheet } from "react-native";


type Props = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
};

const DetailsScreen: React.FC<Props> = ({ navigation, route }) => {
    const { itemId } = route.params;

    return (
        <View style={styles.container}>
            <Text>Tela de Detalhes</Text>
            <Text>itemID: {itemId}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
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

export default DetailsScreen;