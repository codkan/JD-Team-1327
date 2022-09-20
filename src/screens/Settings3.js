
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";

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

  const [selectedValue, setSelectedValue] = useState("java");


  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text style={CoreStyle.settingText}> Settings</Text>
    <View style={CoreStyle.settingContainer}>
    <MainButton
      text="Accessibility Settings"
      onPress={handleSettings2Nav}
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Sound Settings"
      onPress={handleSettings1Nav}
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Mute Sound"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Increase Volume"
      txtColor={"black"}
    ></MainButton>
    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}