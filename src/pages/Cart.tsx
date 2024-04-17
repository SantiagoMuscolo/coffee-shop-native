import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useCartContext } from "../context/CartContext";
import { PLUS, TRASH, ARROW_BACK, CART } from "../assets";

function Cart({ navigation }) {
    const { cartlist, addProduct, removeProduct, totalProductValue } =
        useCartContext();

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
            <TouchableOpacity
                style={styles.return}
                onPress={() => navigation.navigate("Home")}
            >
                <Image style={styles.imageReturn} source={ARROW_BACK} />
            </TouchableOpacity>
            {cartlist.length > 0 ? (
                cartlist?.map((item: any) => (
                    <View style={styles.cartItemContainer} key={item?.product?.id}>
                        <View style={styles.cartGeneralItemContainer}>
                            <Image style={styles.image} source={item?.product?.imagen} />
                            <View>
                                <Text style={styles.productTitle}>{item?.product?.nombre}</Text>
                                <View style={styles.actionsContainer}>
                                    <TouchableOpacity
                                        onPress={() => removeProduct(item?.product?.id)}
                                    >
                                        <Image style={styles.iconTrash} source={TRASH} />
                                    </TouchableOpacity>
                                    <Text>{item.cantidad}</Text>
                                    <TouchableOpacity
                                        onPress={() => handleAddProduct(item?.product)}
                                    >
                                        <Image style={styles.iconPlus} source={PLUS} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.price}>$ {item?.product?.price}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <View style={styles.emptyCartContainer}>
                    <Image source={CART} style={styles.image}/>
                    <Text style={styles.emptyCartText}>Tu carrito actualmente se encuentra vacio, porfavor agrega productos para poder verlos reflejados aqui!</Text>
                </View>

            )}
            {cartlist.length > 0 && (
                <View style={styles.buyContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.genericTitle}>Price</Text>
                        <Text style={styles.priceTotal}>
                            $ {totalProductValue.toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buyButton} onPress={handleAddProduct}>
                        <Text style={styles.textBuyContainer}>Generate QR</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 60,
    },
    return: {
        marginLeft: 10,
        color: '#fff',
        backgroundColor: '#202020',
        width: 40,
        padding: 2,
        borderRadius: 5,
    },
    imageReturn: {
        width: 30,
        height: 30,
        left: 2
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    cartItemContainer: {
        marginTop: 20,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 15,
        padding: 6,
        width: 370,
        flexDirection: "row",
        gap: 85,
        alignItems: "center",
    },
    productTitle: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold",
    },
    iconTrash: {
        width: 25,
        height: 25,
    },
    iconPlus: {
        width: 22,
        height: 22,
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        padding: 4,
        gap: 20,
        width: 110,
    },
    cartGeneralItemContainer: {
        flexDirection: "row",
        gap: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
    },
    buyContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: 10,
        paddingBottom: 20,
        justifyContent: "space-evenly",
    },
    priceContainer: {
        alignItems: "center",
    },
    priceTotal: {
        fontSize: 30,
    },
    buyButton: {
        backgroundColor: "#8B4513",
        width: 250,
        padding: 25,
        borderRadius: 25,
    },
    textBuyContainer: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    genericTitle: {
        color: "#8B4513",
    },
    emptyCartContainer: {
        position: 'absolute',
        top: 300,
        left: 50,
        alignItems: 'center',
        gap: 15
    },
    emptyCartText: {
        textAlign: 'center',
        maxWidth: 300,
    }
});

export default Cart;
