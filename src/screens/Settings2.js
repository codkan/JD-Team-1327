
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import Background_alt from "../assets/bg-alt.png";
import logo1 from "../assets/landinglogo.png"
import logo2 from "../assets/landinglogo-alt.png"
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
  const handleSettings3Nav = () => {
    navigation.navigate("Settings3");
  };

  const changeScheme = () => {
    if (global.scheme == "light") {
        global.scheme = "dark";
        global.color = "darkslategrey";
        global.color2 = "lightslategray";
        global.color3 = "black";
        global.bg = Background_alt;
        global.logo = logo2;
        global.text = "white";
    } else {
        global.scheme = "light";
        global.color = "ivory";
        global.color2 = "papayawhip";
        global.color3 = "lightgray";
        global.bg = Background;
        global.logo = logo1;
        global.text = "black";
    }
    return;
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
          onPress={handleSettings3Nav}
          txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Invert Colors"
      txtColor={"black"}
      onPress={() => changeScheme()}
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