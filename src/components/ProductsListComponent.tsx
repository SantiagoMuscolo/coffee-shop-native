import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import data from "../data/data"
import { Link } from "react-router-native";

interface Props {
    selected: any;
    navigation: any;
}

function ProductsListComponent({ selected, navigation }: Props) {

    const validation = selected !== null ? data.filter((e) => e.category === selected) : data;

    return (
        <View>
            <Text style={styles.title}>Coffees</Text>
            <View style={styles.container}>
                {
                    validation?.map((coffee: any) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { id: `${coffee.id}` })} key={coffee.id}>
                        <View style={styles.card}>
                            <Image style={styles.image} source={coffee.imagen} />
                            <View style={styles.cardText}>
                                <Text style={styles.name}>{coffee.nombre}</Text>
                                <View style={styles.textContainer}>
                                    <Text>preparation</Text>
                                    <Text>{coffee.preparacion}</Text>
                                    <Text>-</Text>
                                    <Text>{coffee.sabor[0]} & {coffee.sabor[1]}</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                        
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 40
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 4
    },
    image: {
        position: 'relative',
        right: 1,
        bottom: 1,
        width: 353,
        height: 153,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    card: {
        borderWidth: 1,
        borderColor: 'black',
        width: 353,
        borderRadius: 10,
        alignItems: 'flex-start',
      
    },
    textContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
    },
    cardText: {
        position: 'relative',
        bottom: 15,
        left: 10
    }
})


export default ProductsListComponent