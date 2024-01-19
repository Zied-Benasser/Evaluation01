import { View, StyleSheet, Image } from "react-native";


const Avatar = (props) => {
    return (
        <View style={[styles.container]}>
            <Image style={styles.image} source={props.img}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        maxHeight: 200,
        maxWidth: 200,
        borderRadius: 100,
        
    },
});

export default Avatar;