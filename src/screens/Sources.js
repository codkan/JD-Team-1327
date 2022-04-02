import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import falls from "../assets/sourcesCrayons/falls.png";
import burns from "../assets/sourcesCrayons/burns.png";
import poisonings from "../assets/sourcesCrayons/poisonings.png";
import drownings from "../assets/sourcesCrayons/drownings.png";
import carSafety from "../assets/sourcesCrayons/carSafety.png";
import parentHealth from "../assets/sourcesCrayons/parentHealth.png";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  const handleGoToPoisoningSource = () => {
    navigation.navigate("PoisoningSources");
  };

  const handleGoToBurnSource = () => {
    navigation.navigate("BurningSources");
  };

  const handleGoToFallSource = () => {
      navigation.navigate("FallSources");
    };

  const handleGoToDrowningSource = () => {
    navigation.navigate("DrowningSources");
  };

  const handleGoToTrafficSource = () => {
    navigation.navigate("TrafficSources");
  };

  const handleGoToParentalHealthSource = () => {
      navigation.navigate("ParentalHealthSources");
    };

  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Sources </Text>
    <View style = {styles.buttonContainer}>

<TouchableOpacity onPress={handleGoToFallSource}>
<Image source={falls} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToBurnSource}>
<Image source={burns} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToPoisoningSource}>
<Image source={poisonings} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToDrowningSource}>
<Image source={drownings} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToTrafficSource}>
<Image source={carSafety} style={styles.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToParentalHealthSource}>
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

  modalText: {
      // margin: 100,
      height: 70,
      fontSize: 40,
      marginTop: 100,
      marginBottom: 15,
      fontWeight: "bold",
      textAlign: "center",
  },

  /* rectangle: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT * 0.1,
    color: "black"
  }, */


});