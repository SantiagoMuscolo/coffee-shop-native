import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useCartContext } from "../context/CartContext";
import { PLUS, TRASH } from "../assets";
import data from "../data/data";

function Cart({ navigation }) {
    const { cartlist, addProduct, removeProduct } = useCartContext();

    console.log(cartlist);

    const handleAddProduct = (product) => {
        const productToAdd = {
            product: product,
            cantidad: 1,
        };
        addProduct(productToAdd);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Return</Text>
            </TouchableOpacity>
            {cartlist?.map((item: any) => (
                <View style={styles.cartItemContainer} key={item?.product?.id}>
                    <View style={styles.cartGeneralItemContainer}>
                        <Image style={styles.image} source={item?.product?.imagen} />
                        <View>
                            <Text style={styles.productTitle}>{item?.product?.nombre}</Text>
                            <View style={styles.actionsContainer}>
                                <TouchableOpacity onPress={() => removeProduct(item?.product?.id)}>
                                    <Image style={styles.iconTrash} source={TRASH} />
                                </TouchableOpacity>
                                <Text>{item.cantidad}</Text>
                                <TouchableOpacity onPress={() => handleAddProduct(item?.product)}>
                                    <Image style={styles.iconPlus} source={PLUS} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.price}>$ {item?.product?.price}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 30
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    cartItemContainer: {
        marginTop: 20,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        padding: 6,
        width: 370,
        flexDirection: 'row',
        gap: 85,
        alignItems: 'center'
    },
    productTitle: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    iconTrash: {
        width: 25,
        height: 25
    },
    iconPlus: {
        width: 22,
        height: 22
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 4,
        gap: 20,
        width: 110
    },
    cartGeneralItemContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Cart;