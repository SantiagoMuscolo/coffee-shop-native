import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";

function Cart(){
    return(
        <View style={styles.container}>
           <TouchableOpacity onPress={() => {}} activeOpacity={1}>
              <Link to={"/"}>
                <Text>Return</Text>
              </Link>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})

export default Cart;