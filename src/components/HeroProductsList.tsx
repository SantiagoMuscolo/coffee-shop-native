import { View, Text, StyleSheet, Image } from "react-native";
import { COFFEE_HERO } from "../assets";

function HeroProductsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discover a world of coffee delights at</Text>
      <Text style={styles.link}>Try to test</Text>
      <Image style={styles.image} source={COFFEE_HERO} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    backgroundColor: "#8B4513",
    marginTop: 30,
    borderRadius: 19,
    justifyContent: "center",
  },
  text: {
    color: "#ffff",
    fontWeight: "700",
    maxWidth: 180,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 177,
  },
  link: {
    textDecorationLine: "underline",
    color: "#ffff",
    position: 'relative',
    left: 22,
    marginTop: 6
  },
});

export default HeroProductsList;
