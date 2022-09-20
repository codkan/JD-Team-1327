import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  const handleFallsNav = () => {
    navigation.navigate("Falls");
  };
  const handleBurnsNav = () => {
    navigation.navigate("Burns");
  };
  const handlePoisoningsNav = () => {
    navigation.navigate("Poisonings");
  };
  const handleDrowningsNav = () => {
    navigation.navigate("Drownings");
  };
  const handleTrafficNav = () => {
    navigation.navigate("Traffic");
  };
  const handleParentalHealthNav = () => {
    navigation.navigate("ParentalHealth");
  };

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text style={CoreStyle.moduleText}>Pick a Topic</Text>
    <Text style={CoreStyle.note}>[Click pictures to start and stop listening to text]</Text>
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


