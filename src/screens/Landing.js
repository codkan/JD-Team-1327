/*
 * Landing Screen
 */

import React from "react";
import {useState} from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import disclaim from "../assets/buttons/info.png";
import setting from "../assets/buttons/settings.png";
import login from "../assets/buttons/login.png";
import Background from "../assets/app/bg.png";
import Background_alt from "../assets/app/bg-alt.png";
import logo from "../assets/app/landinglogo.png"
import Navbar from "../components/NavBar";
import * as ScreenOrientation from 'expo-screen-orientation'
import { CoreStyle } from "../components/CoreStyle";
import Crayon from "../components/Crayon";
import {handleLogin} from "../components/Login.js";

global.user_id = null;
global.user;
global.times;

export default function Landing({ navigation }) {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    if (global.scheme == "dark") {
        global.bg = Background_alt;
        global.color = "darkslategrey";
        global.color2 = "lightslategray";
        global.color3 = "black";
        global.text = "white";
    } else {
        global.bg = Background;
        global.color = "ivory";
        global.color2 = "papayawhip";
        global.color3 = "lightgray";
        global.text = "black";
    }

  const goMenu = (_module) => {
    navigation.navigate("Menu", {module: _module});
  }

  const handleSettingsNav = () => {
    navigation.navigate("Settings");
  };
  const handleDisclaimNav = () => {
    navigation.navigate("Disclaim");
  };
  const handleGameNav = () => {
    ScreenOrientation.unlockAsync();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("Home");
  };

    return (
      <ImageBackground source={global.bg} style={CoreStyle.image}>

      <View style = {CoreStyle.topnavbuttons}>

        <TouchableOpacity onPress={() => handleSettingsNav()}
                          accessibilityLabel={"Settings"} accessibilityRole={"button"} accessibilityHint={"view settings"}>
            <Image source={setting} style={CoreStyle.btn}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleLogin()}
                          accessibilityLabel={"Login"} accessibilityRole={"button"} accessibilityHint={"Sign in to profile"}>
            <Image source={login} style={CoreStyle.btn}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDisclaimNav}
                          accessibilityLabel={"Info"} accessibilityRole={"button"} accessibilityHint={"View information and disclaimer about the application"}>
            <Image source={disclaim} style={CoreStyle.btn}></Image>
        </TouchableOpacity>

      </View>

      <Image source={global.logo} style={CoreStyle.logo}></Image>

      <View style={CoreStyle.buttonContainer}>

        <Crayon fontSize={6} text={"Info"} onPress={() => goMenu("Information")} color1={"darkred"} color2={"red"}/>
        <Crayon fontSize={6} text={"Media"} onPress={() => goMenu("Media")} color1={"darkorange"} color2={"orange"}/>
        <Crayon fontSize={6} text={"Quiz"} onPress={() => goMenu("Quiz")} color1={"darkgreen"} color2={"green"}/>
        <Crayon fontSize={6} text={"Sources"} onPress={() => goMenu("Resources")} color1={"darkblue"} color2={"blue"}/>
        <Crayon fontSize={6} text={"Game"} onPress={() => handleGameNav()} color1={"darkviolet"} color2={"purple"}/>

      </View>

        <Navbar navigation={navigation}/>
      </ImageBackground>
      
    );
 }
