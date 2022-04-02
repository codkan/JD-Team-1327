import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import falls from "../assets/mediaCrayons/falls.png";
import burns from "../assets/mediaCrayons/burns.png";
import poisonings from "../assets/mediaCrayons/poisonings.png";
import drownings from "../assets/mediaCrayons/drownings.png";
import carSafety from "../assets/mediaCrayons/carSafety.png";
import parentHealth from "../assets/mediaCrayons/parentHealth.png";

export default function Multimedia({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  const handleFallsMMNav = () => {
    navigation.navigate("FallsMM");
  };
  const handleBurnsNav = () => {
    navigation.navigate("BurnsMM");
  };
  const handlePoisoningsNav = () => {
    navigation.navigate("PoisoningsMM");
  };
  const handleDrowningsNav = () => {
    navigation.navigate("DrowningMM");
  };
  const handleCarSafetyMMNav = () => {
    navigation.navigate("CarSafetyMM");
  };
  const handleParentalHealthMMNav = () => {
    navigation.navigate("ParentalHealthMM");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Multimedia Contents</Text>
    <View style={styles.buttonContainer}>

<TouchableOpacity onPress={handleFallsMMNav}>
<Image source={falls} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleBurnsNav}>
<Image source={burns} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handlePoisoningsNav}>
<Image source={poisonings} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleDrowningsNav}>
<Image source={drownings} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleCarSafetyMMNav}>
<Image source={carSafety} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleParentalHealthMMNav}>
<Image source={parentHealth} style={styles.crayon}></Image>
</TouchableOpacity>
</View>
<Navbar navigation={navigation}/>
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  modalText: {
    // margin: 100,
    height: 70,
    fontSize: 40,
    marginTop: 60,
    marginBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: 150,
    marginBottom: 15,
    alignItems: "center"
  },
  crayon: {
    height:50,
    width:355,
    marginTop: 25,
  },
  buttonContainer: {
    flex: 1,
    top: -80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonContainer2: {
    flex: 1,
    top: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    color: "black",
  },
});


