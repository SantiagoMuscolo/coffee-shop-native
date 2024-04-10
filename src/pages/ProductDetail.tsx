import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import { STAR, ARROW_BACK } from "../assets";
import data from "../data/data";
import { sizes } from "../constants/constants";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

function ProductDetail({ route, navigation }) {
    const [selectedSize, setSelectedSize] = useState(1);
    const { addProduct } = useCartContext();

    const { id } = route.params;
    const product = data?.find(item => item.id === parseInt(id))

    const handlePress = (id: number) => {
        if (selectedSize === id) {
            setSelectedSize(1);
        } else {
            setSelectedSize(id);
        }
    };

    const handleAddProduct = () => {
        addProduct(product)
    }

    return (
        <ScrollView style={styles.scrolleableContainer}>
            {
                !product ? (
                    <Text>404: Producto no encontrado</Text>
                ) : (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('Home')}>
                            <Image style={styles.imageReturn} source={ARROW_BACK} />
                        </TouchableOpacity>
                        <Image style={styles.image} source={product.imagen} />
                        <View style={styles.heroContainer}>
                            <Text style={styles.title}>{product.nombre}</Text>
                            <Text style={styles.subTitle}>{product.sabor[0]} & {product.sabor[1]}</Text>
                            <View style={styles.heroRateContainer}>
                                <Image style={styles.star} source={STAR} />
                                <Text style={styles.textRate}>{product.stars}</Text>
                            </View>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.genericTitle}>Description</Text>
                            <Text style={styles.genericText}>{product.descripcion}</Text>
                        </View>
                        <View style={styles.genericContainer}>
                            <Text style={styles.genericTitle}>Size</Text>
                            <View style={styles.sizesContainer}>
                                {
                                    sizes.map((size: { id: number, name: string }) => (
                                        <TouchableOpacity style={selectedSize === size.id ? styles.selectedSize : styles.sizeContainer} onPress={() => handlePress(size.id)} key={size.id}>
                                            <Text style={selectedSize === size.id ? styles.selectedText : styles.textSize}>{size.name}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.buyContainer}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.genericTitle}>Price</Text>
                                <Text style={styles.price}>$ {product.price}</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton} onPress={handleAddProduct}>
                                <Text style={styles.textBuyContainer}>Add to cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrolleableContainer: {
        flexGrow: 1,
    },
    container: {
        zIndex: 1,
        elevation: 1,
        flexGrow: 1
    },
    image: {
        width: 400,
        height: 300,
    },
    return: {
        position: 'absolute',
        top: 45,
        left: 10,
        elevation: 1,
        zIndex: 3,
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
    star: {
        width: 30,
        height: 30
    },
    heroContainer: {
        position: 'relative',
        bottom: 30,
        width: 393,
        backgroundColor: '#202020',
        borderRadius: 30,
        padding: 25
    },
    heroRateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 10
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    subTitle: {
        color: '#A9A9A9'
    },
    textRate: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    descriptionContainer: {
        position: 'relative',
        bottom: 5,
        marginLeft: 10,
        gap: 10
    },
    genericTitle: {
        color: '#8B4513'
    },
    genericText: {
        maxWidth: 370
    },
    genericContainer: {
        marginTop: 30,
        marginLeft: 10,
        gap: 10
    },
    sizesContainer: {
        flexDirection: 'row',
        gap: 30,
    },
    sizeContainer: {
        backgroundColor: '#202020',
        width: 100,
        borderRadius: 10,
        padding: 5,
        borderWidth: 2,
    },
    textSize: {
        color: '#A9A9A9',
        textAlign: 'center'
    },
    selectedSize: {
        borderColor: '#CD7F32',
        borderWidth: 2,
        width: 100,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#202020'
    },
    selectedText: {
        color: '#CD7F32',
        textAlign: 'center'
    },
    buyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 70,
        gap: 40,
        marginLeft: 10,
        paddingBottom: 20,
    },
    priceContainer: {
        alignItems: 'center'
    },
    price: {
        fontSize: 30
    },
    buyButton: {
        backgroundColor: '#8B4513',
        width: 250,
        padding: 25,
        borderRadius: 25
    },
    textBuyContainer: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    }
})

export default ProductDetail;