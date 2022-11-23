/*
 * Landing Screen
 */

import React from "react";
import { Image, ImageBackground, TouchableOpacity, View, Alert } from "react-native";
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
import {handleDelete} from "../components/Login.js";

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
        global.color2 = "powderblue";
        global.color3 = "lightgray";
        global.text = "black";
    }

  const goMenu = (_module) => {
    navigation.navigate("Menu", {module: _module});
  }

  const handleLoginNav = () => {
    if (global.user_id == null) {
        handleLogin();
    } else {
        Alert.alert(
            'You Are Already Logged In',
            "You have already signed in. Would you like to delete your account or go back?",
            [
                {text: 'DELETE ACCOUNT', style: 'destructive', onPress: () => handleDeleteNav()},
                {text: 'CANCEL', style: 'default'},
            ],
        );
    }
  };

  const handleDeleteNav = () => {
    Alert.alert(
        'ARE YOU SURE?',
        "Are you certain that you wish to delete your account? If so, press YES, DELETE ACCOUNT. Otherwise, press NO, CANCEL DELETION",
        [
            {text: 'YES, DELETE ACCOUNT', style: 'destructive', onPress: () => handleDelete()},
            {text: 'NO, CANCEL DELETION', style: 'default'},
        ],
    );
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

        <TouchableOpacity onPress={() => handleLoginNav()}
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
        <Crayon fontSize={6} text={"Game"} onPress={() => handleGameNav()} color1={"rgb(74,0,127)"} color2={"rgb(147,0,255)"}/>

      </View>

        <Navbar navigation={navigation}/>
      </ImageBackground>
      
    );
 }
