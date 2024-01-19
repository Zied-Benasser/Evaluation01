import { Text, View, StyleSheet } from "react-native";

const Description = (props) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.textContainer]}>
                <Text style={styles.textName}> {props.nom} {props.prenom}</Text>
                <Text style={styles.textName}> {props.metier}</Text>
                <Text style={styles.text}>{props.profil}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 10,
        maxHeight: 500,
        maxWidth: 400,
    },
    textName: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
    },


});

export default Description;