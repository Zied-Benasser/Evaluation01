import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { Ionicons } from "@expo/vector-icons";

const Write = (props) => {
    return (
        <View style={styles.contenaire}>
            <View style={styles.cont}>
                <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(`sms:${props.tel}`)}>
                    <Ionicons name="document-text-outline" size={24} color="black" />
                    <Text>Envoyer un sms</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cont}>
                <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(`mailto:${props.mail}`)}>
                    <Ionicons name="mail" size={24} color="black" />
                    <Text>Envoyer un mail</Text>
                </TouchableOpacity>
            </View>
        </View >

    );
}


const styles = StyleSheet.create({
    contenaire: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    cont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "red",
    },
    touchable: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 150,
    },
});

export default Write;