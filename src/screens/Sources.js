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

  const goResources = (_topic) => {
    navigation.navigate("Resources", {topic: _topic});
  }

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
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text allowFontScaling={true} style={CoreStyle.moduleText}>Pick a Color to{'\n'}Choose a Topic</Text>
    <View style = {CoreStyle.buttonContainer}>
        <TouchableOpacity onPress={() => goResources("Falls")}>
            <Image source={falls} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goResources("Burns")}>
            <Image source={burns} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goResources("Poisonings")}>
            <Image source={poisonings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goResources("Drownings")}>
            <Image source={drownings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goResources("Car Safety")}>
            <Image source={carSafety} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goResources("Parental Health")}>
            <Image source={parentHealth} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}