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
    <Text style={styles.modalText}> Review</Text>
    <View style={styles.buttonContainer}>

      <TouchableOpacity onPress={reviewFalls}>
          <Image source={falls} style={styles.crayon}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={reviewBurn}>
          <Image source={burns} style={styles.crayon}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={reviewPoison}>
          <Image source={poisonings} style={styles.crayon}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={reviewDrowning}>
          <Image source={drownings} style={styles.crayon}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={reviewCarSafety}>
          <Image source={carSafety} style={styles.crayon}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={reviewParentalHealth}>
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
  modalText: {
    // margin: 100,
    height: 70,
    fontSize: 40,
    marginTop: 100,
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
  buttonContainer2: {
    flex: 1,
    top: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    color: "black",
  },
});