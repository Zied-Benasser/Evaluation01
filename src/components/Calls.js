import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { Ionicons } from "@expo/vector-icons";

const calls = (props) => {
    return (
        <View style={styles.contenaire}>
            <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(`tel:${props.tel}`)}>
                <Ionicons name="call" size={24} color="green" />
                <Text>Appeler</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contenaire: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        maxHeight: 50,
        maxWidth: 150,
        borderRadius: 10,

    },
    touchable: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 50,
    },
});

export default calls;