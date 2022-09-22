import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/app/bg.png";
import MainButton from "../components/buttons/MainButton";
import Navbar from "../components/NavBar";
import falls from "../assets/reviewCrayons/falls.png";
import burns from "../assets/reviewCrayons/burns.png";
import poisonings from "../assets/reviewCrayons/poisonings.png";
import drownings from "../assets/reviewCrayons/drownings.png";
import carSafety from "../assets/reviewCrayons/carSafety.png";
import parentHealth from "../assets/reviewCrayons/parentHealth.png";
import { CoreStyle } from "../components/CoreStyle.js";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  const goQuiz = (_topic) => {
    navigation.navigate("Quiz", {topic: _topic});
  }

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text allowFontScaling={true} style={CoreStyle.moduleText}>Pick a Color to{'\n'}Choose a Topic</Text>
    <View style={CoreStyle.buttonContainer}>

        <TouchableOpacity onPress={() => goQuiz("Falls")}>
            <Image source={falls} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goQuiz("Burns")}>
            <Image source={burns} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goQuiz("Poisonings")}>
            <Image source={poisonings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goQuiz("Drownings")}>
            <Image source={drownings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goQuiz("Car Safety")}>
            <Image source={carSafety} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goQuiz("Parental Health")}>
            <Image source={parentHealth} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}