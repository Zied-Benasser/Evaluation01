import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

const Socials = () => {
    return (
        <View style={[styles.container]}>
            <Ionicons name="logo-facebook" size={40} color="blue" onPress={() => Linking.openURL(`https://fr-fr.facebook.com`)} />
            <Ionicons name="logo-twitter" size={40} color="lightblue" onPress={() => Linking.openURL(`https://twitter.com/home`)} />
            <Ionicons name="logo-instagram" size={40} color="black" onPress={() => Linking.openURL(`https://www.instagram.com`)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        padding: 10,
    },
});

export default Socials;