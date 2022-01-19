import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function Info({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  const handleFallsNav = () => {
    navigation.navigate("Falls1");
  };
  const handleBurnsNav = () => {
    navigation.navigate("Burns1");
  };
  const handlePoisoningNav = () => {
    navigation.navigate("Poisoning1");
  };
  const handleDrowningNav = () => {
    navigation.navigate("Drowning1");
  };
  const handleTrafficNav = () => {
    navigation.navigate("Traffic1");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Table of Contents</Text>
    <View style={styles.buttonContainer}>
    <MainButton
      text="Falls"
      txtColor={"black"}
      onPress={handleFallsNav}
    ></MainButton>
    <MainButton
      text="Burns"
      txtColor={"black"}
      onPress={handleBurnsNav}
    ></MainButton>
    <MainButton
      text="Poisoning"
      txtColor={"black"}
      onPress={handlePoisoningNav}
    ></MainButton>
    <MainButton
      text="Drowning"
      txtColor={"black"}
      onPress={handleDrowningNav}
    ></MainButton>
    <MainButton
      text="Road Traffic"
      txtColor={"black"}
      onPress={handleTrafficNav}
    ></MainButton>
    <MainButton
      text="Bookmarks"
      txtColor={"black"}
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


