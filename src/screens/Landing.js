/*
 * Landing Screen
 */

import React from "react";
import {useState} from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import disclaim from "../assets/info.png";
import setting from "../assets/settings.png";
import Background from "../assets/bg.png";
import logo from "../assets/landinglogo.png"
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
  const handleSettings1Nav = () => {
    navigation.navigate("Settings1");
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
      <ImageBackground source={Background} style={CoreStyle.image}>

        
      <View style = {CoreStyle.topnavbuttons}>
        <TouchableOpacity onPress={handleDisclaimNav}>
            <Image source={disclaim} style={CoreStyle.btn}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings1Nav} style={CoreStyle.btn}>
            <Image source={setting} style={CoreStyle.btn}></Image>
        </TouchableOpacity>
      </View>

        <View style={CoreStyle.buttonContainer}>

        <Image source={logo} style={CoreStyle.logo}></Image>


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
