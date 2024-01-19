import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ViewExample = () => {
    return (
        <View style={styles.container}>
            <Text>ViewExample</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default ViewExample;
