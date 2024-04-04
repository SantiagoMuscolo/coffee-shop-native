import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeroProductList from "../components/HeroProductsList";
import Beverage from "../components/Beverage";

function ProductsList() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.title}>Buenos Aires, Argentina</Text>
        <Text style={styles.subTitle}>What coffee would you like?</Text>
        <HeroProductList />
        <Beverage />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 60,
    marginLeft: 20,
  },
  title: {
    color: "#8B4513",
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    color: "#A9A9A9",
  },
});

export default ProductsList;
