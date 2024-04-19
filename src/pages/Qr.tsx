import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { ARROW_BACK, QR } from "../assets";

function Qr({ navigation }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.return}
                onPress={() => navigation.navigate("Home")}
            >
                <Image style={styles.imageReturn} source={ARROW_BACK} />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <Image style={styles.qr} source={QR} />
                <Text style={styles.qrText}>Escanea este codigo QR en el mostrador para finalizar el pedido</Text>
                <Text>Muchas gracias por tu compra!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 60
    },
    return: {
        marginLeft: 10,
        color: "#fff",
        backgroundColor: "#202020",
        width: 40,
        padding: 2,
        borderRadius: 5,
    },
    imageReturn: {
        width: 30,
        height: 30,
        left: 2,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 150
    },
    qr: {
        width: 250,
        height: 250
    },
    qrText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        maxWidth: 300
    }
})

export default Qr;