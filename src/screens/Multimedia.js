import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function Multimedia({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  const handleFallsM1Nav = () => {
    navigation.navigate("FallsM1");
  };
  const handleBurnsNav = () => {
    navigation.navigate("Burns");
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
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Multimedia Contents</Text>
    <View style={styles.buttonContainer}>
    <MainButton
      text="Falls"
      txtColor={"black"}
      onPress={handleFallsM1Nav}
    ></MainButton>
    <MainButton
      text="Burns"
      txtColor={"black"}
      onPress={handleBurnsNav}
    ></MainButton>
    <MainButton
      text="Poisonings"
      txtColor={"black"}
      onPress={handlePoisoningsNav}
    ></MainButton>
    <MainButton
      text="Drownings"
      txtColor={"black"}
      onPress={handleDrowningsNav}
    ></MainButton>
    <MainButton
      text="Car Safety"
      txtColor={"black"}
      onPress={handleCarSafetyMMNav}
    ></MainButton>
    <MainButton
      text="Parental Health"
      txtColor={"black"}
      onPress={handleParentalHealthMMNav}
    ></MainButton>
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
    marginBottom: 25,
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


