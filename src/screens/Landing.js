/*
 * Landing Screen
 */

import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button } from "react-native";
import MainButton from "../components/MainButton";
import { get } from "../Db";
import Background from "../assets/landing.png";
import { Audio } from "expo-av";


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

    return (
      <ImageBackground source={Background} style={styles.image}>
        <View style={styles.buttonContainer}>
          <MainButton
            text="Info"
            onPress={handleInfoNav}
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
    top: 90,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },
  button: {
    color: "black",
  },
});

//903 x 1654
