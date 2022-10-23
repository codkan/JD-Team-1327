
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Background from "../assets/app/bg.png";
import Background_alt from "../assets/app/bg-alt.png";
import logo1 from "../assets/app/landinglogo.png"
import logo2 from "../assets/app/landinglogo-alt.png"
import MainButton from "../components/buttons/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function About({ navigation }) {

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
  };

  const changeVolume = (lvl) => {
    if (lvl > 0) {
        global.volume = global.volume + 0.1;
    } else if (lvl < 0) {
        global.volume = global.volume - 0.1;
    } else {
        global.volume = 0.0;
        global.muted = true;
    }
  }

  const clearBoard = async () => {
    let n = await AsyncStorage.getAllKeys();
    for (let value of n) {
        await AsyncStorage.removeItem(value);
    }
  }

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>
    <Text allowFontScaling={true} style={CoreStyle.settingText}> Settings</Text>
    <View style={CoreStyle.settingContainer}>
    <MainButton
      text="Clear Local Leaderboard"
      txtColor={"black"}
      onPress={() => clearBoard()}
    ></MainButton>
    <MainButton
      text="Invert Colors"
      txtColor={"black"}
      onPress={() => changeScheme()}
    ></MainButton>
    <MainButton
      text="Mute Sound"
      txtColor={"black"}
      onPress={() => changeVolume(0)}
    ></MainButton>
    <MainButton
      text="Decrease Volume"
      txtColor={"black"}
      onPress={() => changeVolume(-1)}
    ></MainButton>
    <MainButton
      text="Increase Volume"
      txtColor={"black"}
      onPress={() => changeVolume(1)}
    ></MainButton>
    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}