import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import falls from "../assets/infoCrayons/falls.png";
import burns from "../assets/infoCrayons/burns.png";
import poisonings from "../assets/infoCrayons/poisonings.png";
import drownings from "../assets/infoCrayons/drownings.png";
import carSafety from "../assets/infoCrayons/carSafety.png";
import parentHealth from "../assets/infoCrayons/parentHealth.png";
import { CoreStyle } from "../components/CoreStyle.js";

export default function Info({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  function TTSalert() {
    Alert.alert(
        'How to Use Text-to-Speech',
        "Press the first image to read the entire page aloud\n\nPress any section's image to read just the section aloud\n\nPress any image to stop reading aloud at any time",
        [
            {text: 'BACK', style: 'destructive'},
            {text: 'CONTINUE     ', style: 'default'},
        ],
        {cancelable: true}
    );
  }

  const handleFallsNav = () => {
    TTSalert();
    navigation.navigate("Falls");
  };
  const handleBurnsNav = () => {
    TTSalert();
    navigation.navigate("Burns");
  };
  const handlePoisoningsNav = () => {
    TTSalert();
    navigation.navigate("Poisonings");
  };
  const handleDrowningsNav = () => {
    TTSalert();
    navigation.navigate("Drownings");
  };
  const handleTrafficNav = () => {
    TTSalert();
    navigation.navigate("Traffic");
  };
  const handleParentalHealthNav = () => {
    TTSalert();
    navigation.navigate("ParentalHealth");
  };

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text allowFontScaling={true} style={CoreStyle.moduleText}>Pick a Color to{'\n'}Choose a Topic</Text>
    <View style={CoreStyle.buttonContainer}>

    <TouchableOpacity onPress={handleFallsNav}>
        <Image source={falls} style={CoreStyle.crayon}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleBurnsNav}>
        <Image source={burns} style={CoreStyle.crayon}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePoisoningsNav}>
        <Image source={poisonings} style={CoreStyle.crayon}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleDrowningsNav}>
        <Image source={drownings} style={CoreStyle.crayon}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleTrafficNav}>
        <Image source={carSafety} style={CoreStyle.crayon}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleParentalHealthNav}>
        <Image source={parentHealth} style={CoreStyle.crayon}></Image>
    </TouchableOpacity>
    </View>
    <Navbar navigation={navigation}/>
  </ImageBackground>
  );
}


