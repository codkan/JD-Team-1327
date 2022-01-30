
import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import { get } from "../Db";
import Background from "../assets/settings_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  const handleSettings1Nav = () => {
    navigation.navigate("Settings1");
  };
  const handleSettings2Nav = () => {
    navigation.navigate("Settings2");
  };
  const handleSettings3Nav = () => {
    navigation.navigate("Settings3");
  };

  const [selectedValue, setSelectedValue] = useState("java");


  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Settings</Text>
    <View style={styles.buttonContainer}>
    <MainButton
      text="Accessibility Settings"
      onPress={handleSettings2Nav}
      txtColor={"black"}
    ></MainButton>
    <MainButton
          text="Sound Settings"
          onPress={handleSettings3Nav}
          txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Invert Color"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Font Size"
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
    marginTop: 150,
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
  button: {
    color: "black",
  },
});