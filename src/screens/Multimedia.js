import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/app/bg.png";
import MainButton from "../components/buttons/MainButton";
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

  const goMedia = (_topic) => {
    navigation.navigate("Media", {topic: _topic});
  }

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text allowFontScaling={true} style={CoreStyle.moduleText}>Pick a Color to{'\n'}Choose a Topic</Text>
    <View style={CoreStyle.buttonContainer}>

        <TouchableOpacity onPress={() => goMedia("Falls")}>
            <Image source={falls} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goMedia("Burns")}>
            <Image source={burns} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goMedia("Poisonings")}>
            <Image source={poisonings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goMedia("Drownings")}>
            <Image source={drownings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goMedia("Car Safety")}>
            <Image source={carSafety} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goMedia("Parental Health")}>
            <Image source={parentHealth} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}


