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
import { CoreStyle } from "../components/CoreStyle.js";

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
    <ImageBackground source={Background} style={CoreStyle.image}>
    <Text style={CoreStyle.moduleText}>Multimedia</Text>
    <View style={CoreStyle.buttonContainer}>
        <TouchableOpacity onPress={handleFallsMMNav}>
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

        <TouchableOpacity onPress={handleCarSafetyMMNav}>
            <Image source={carSafety} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleParentalHealthMMNav}>
            <Image source={parentHealth} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}


