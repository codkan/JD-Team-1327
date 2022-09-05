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
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}>Review</Text>
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
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: 150,
    marginBottom: 15,
    alignItems: "center"
  },
  button: {
    color: "black",
  },
});