import { View, StyleSheet, } from "react-native";
import Avatar from "./Avatar";
import Description from "./Description";
import Socials from "./Socials";
import Calls from "./Calls";
import Write from "./Write";

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.avatar}>
                    <Avatar img={require('../../assets/adaptive-icon.png')} />
                </View>
                <View style={styles.description}>
                    <Description nom="Benasser" prenom="Zied" metier="Dev" profil="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam nec lectus nec massa tempor cursus. Sed in nisi id
                    nisl ultrices placerat. Sed euismod, dolor sit amet
                    " />
                </View>
            </View>
            <View style={styles.bot}>
                <View style={styles.socials}>
                    <Socials />
                </View>
                <View style={styles.calls}>
                    <Calls tel="0652149498" />
                </View>
                <View style={styles.write}>
                    <Write tel="0652149498" mail="zied.benasser@gamil.com"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    top: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
    },

    bot: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    avatar: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        flex: 1,
        backgroundColor: "darksalmon",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    socials: {
        flex: 1,
        backgroundColor: "#fff",
    },
    calls: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: 90
    },
    write: {
        flex: 1,
        backgroundColor: "red",
        maxHeight: 70
    },
});

export default Layout;