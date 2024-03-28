import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { Link } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

const image = {
  uri: "https://i.pinimg.com/564x/85/5a/f3/855af3a0dafcdf4506a3db90414a91c2.jpg",
};

function Hero() {
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.messageContainer}>
        <Text style={styles.title}>
          One Cup Coffee Make Your Day Productive
        </Text>
        <Text style={styles.text}>
          Coffee is a beverage prepared from roasted coffe beans. Coffee has a
          stimulating effect on humans. It has the highest sales.
        </Text>
        <Link to={"/products-list"}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>More Here</Text>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/24/Arrow-right-512.png",
                }}
                style={styles.arrow}
              />
          </View>
        </Link>
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  messageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6F4E37",
    width: 370,
    height: 450,
    position: "absolute",
    top: 370,
    left: 10,
    borderRadius: 20,
    opacity: 0.8,
  },
  title: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "System",
  },
  text: {
    color: "#fefefe",
    textAlign: "center",
    marginTop: 15,
    maxWidth: 290,
    fontFamily: "System",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    marginRight: 5,
  },
  emptyButton: {
    padding: 38,
    backgroundColor: "transparent",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 2,
    position: "absolute",
    top: 330,
  },
  arrow: {
    width: 20,
    height: 20,
    position: "relative",
    top: 1,
  },
});

export default Hero;
