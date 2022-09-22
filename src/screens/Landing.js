/*
 * Landing Screen
 */

import React from "react";
import {useState} from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import disclaim from "../assets/buttons/info.png";
import setting from "../assets/buttons/settings.png";
import Background from "../assets/app/bg.png";
import Background_alt from "../assets/app/bg-alt.png";
import logo from "../assets/app/landinglogo.png"
import game from "../assets/landingCrayons/game.png";
import info from "../assets/landingCrayons/info.png";
import review from "../assets/landingCrayons/review1.png";
import sources from "../assets/landingCrayons/sources.png";
import videos from "../assets/landingCrayons/videos.png";
import Navbar from "../components/NavBar";
import * as ScreenOrientation from 'expo-screen-orientation'
import { CoreStyle } from "../components/CoreStyle";


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

  const handleInfoNav = () => {
    navigation.navigate("Info");
  };
  const handleReviewNav = () => {
    navigation.navigate("Review");
  };
  const handleGameNav = () => {
    ScreenOrientation.unlockAsync();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("Home");
  };
  const handleSettingsNav = () => {
    navigation.navigate("Settings");
  };
  const handleSourcesNav = () => {
    navigation.navigate("Sources");
  };
  const handleMultimediaNav = () => {
      navigation.navigate("Multimedia");
  };
  const handleDisclaimNav = () => {
    navigation.navigate("Disclaim");
  };

    return (
      <ImageBackground source={global.bg} style={CoreStyle.image}>

      <View style = {CoreStyle.topnavbuttons}>
        <TouchableOpacity style={CoreStyle.invisible}>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDisclaimNav}>
            <Image source={disclaim} style={CoreStyle.btn}></Image>
        </TouchableOpacity>
      </View>

        <View style={CoreStyle.buttonContainer}>

        <Image source={global.logo} style={CoreStyle.logo}></Image>

        <TouchableOpacity onPress={handleInfoNav}>
            <Image source={info} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMultimediaNav}>
            <Image source={videos} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReviewNav}>
            <Image source={review} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSourcesNav}>
            <Image source={sources} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGameNav}>
            <Image source={game} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>

        </View>

        <Navbar navigation={navigation}/>
      </ImageBackground>
      
    );
 }
