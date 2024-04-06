import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeroProductList from "../components/HeroProductsList";
import Beverage from "../components/Beverage";
import ProductsListComponent from "../components/ProductsListComponent";
import { useState } from "react";
import { CART } from "../assets";


function ProductsList() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>Buenos Aires, Argentina</Text>
              <Text style={styles.subTitle}>What coffee would you like?</Text>
            </View>
            <Image style={styles.image} source={CART}/>       
          </View>
          <HeroProductList />
          <Beverage setSelected={setSelected} selected={selected} />
          <ProductsListComponent selected={selected} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 60,
    marginLeft: 20,
    paddingBottom: 20,
  },
  title: {
    color: "#8B4513",
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    color: "#A9A9A9",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image:{
    width: 25,
    height: 25,
    marginRight: 35
  }
});

export default ProductsList;
