import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCartContext } from "../context/CartContext";

function Cart({navigation}){
    const { cartlist } = useCartContext()

    console.log(cartlist);
    
    return(
        <View style={styles.container}>
           <TouchableOpacity onPress={() => {}} activeOpacity={1}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Return</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 10
    }
})

export default Cart;