import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import falls from "../assets/sourcesCrayons/falls.png";
import burns from "../assets/sourcesCrayons/burns.png";
import poisonings from "../assets/sourcesCrayons/poisonings.png";
import drownings from "../assets/sourcesCrayons/drownings.png";
import carSafety from "../assets/sourcesCrayons/carSafety.png";
import parentHealth from "../assets/sourcesCrayons/parentHealth.png";
import { CoreStyle } from "../components/CoreStyle.js";

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
    <Text style={styles.modalText}>Sources</Text>
    <View style = {CoreStyle.buttonContainer}>

<TouchableOpacity onPress={handleGoToFallSource}>
<Image source={falls} style={CoreStyle.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToBurnSource}>
<Image source={burns} style={CoreStyle.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToPoisoningSource}>
<Image source={poisonings} style={CoreStyle.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToDrowningSource}>
<Image source={drownings} style={CoreStyle.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToTrafficSource}>
<Image source={carSafety} style={CoreStyle.crayon}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={handleGoToParentalHealthSource}>
<Image source={parentHealth} style={CoreStyle.crayon}></Image>
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
      marginBottom: 15,
      fontWeight: "bold",
      textAlign: "center",
  },
});