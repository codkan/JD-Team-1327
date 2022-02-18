/*
 * Landing Screen
 */

import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";

import { get } from "../Db";
import Background from "../assets/landing.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import disclaim from "../assets/info.png";

export default function Home({ navigation }) {
  const handleInfoNav = () => {
    navigation.navigate("Info");
  };
  const handleReviewNav = () => {
    navigation.navigate("Review");
  };
  const handleGameNav = () => {
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
      <ImageBackground source={Background} style={styles.image}>

        <TouchableOpacity onPress={handleDisclaimNav}>
            <Image source={disclaim} style={styles.button}></Image>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <MainButton
            text="Information"
            onPress={handleInfoNav}
            txtColor={"black"}
          ></MainButton>
          <MainButton
              text="Multimedia"
              onPress={handleMultimediaNav}
              txtColor={"black"}
          ></MainButton>
          <MainButton
            text="Review"
            onPress={handleReviewNav}
            txtColor={"black"}
          ></MainButton>
          <MainButton
            text="Game"
            onPress={handleGameNav}
            txtColor={"black"}
          ></MainButton>
          <MainButton
            text="Sources"
            onPress={handleSourcesNav}
            txtColor={"black"}
          ></MainButton>
          <MainButton
            text="Settings"
            onPress={handleSettings1Nav}
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
  buttonContainer: {
    flex: 1,
    top: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },
    button: {
      height: 50,
      width: 50,
      borderRadius: 100,
      //paddingVertical: 7,
      //paddingHorizontal: 10,
      //marginVertical: 10,
      backgroundColor: "rgba(196,196,196,1)",
      //alignItems: "left",
      //justifyContent: "top",
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowOffset : { width: 0, height: 4},
      //elevation: 7.5,
      marginLeft: 20,
      marginTop: 20,
    },
});

//903 x 1654
