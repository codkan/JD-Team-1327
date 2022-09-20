import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
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
  const reviewFalls = () => {
    navigation.navigate("FallsR");
  };
  const reviewBurn = () => {
    navigation.navigate("BurnR");
  };
  const reviewPoison = () => {
    navigation.navigate("PoisonR");
  };
  const reviewDrowning = () => {
    navigation.navigate("DrowningReview");
  };

  const reviewCarSafety = () => {
    navigation.navigate("RoadRev1");
  }

  const reviewParentalHealth = () => {
    navigation.navigate("ParRev1");
  }

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text style={CoreStyle.moduleText}>Quizzes</Text>
    <View style={CoreStyle.buttonContainer}>
        <TouchableOpacity onPress={reviewFalls}>
            <Image source={falls} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={reviewBurn}>
            <Image source={burns} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={reviewPoison}>
            <Image source={poisonings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={reviewDrowning}>
            <Image source={drownings} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={reviewCarSafety}>
            <Image source={carSafety} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={reviewParentalHealth}>
            <Image source={parentHealth} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}