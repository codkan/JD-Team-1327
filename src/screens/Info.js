import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Review</Text>
    <View style={styles.buttonContainer}>
    <MainButton
      text="Falls"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Burns"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Poisoning"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Drowning"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Road Traffic"
      txtColor={"black"}
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


