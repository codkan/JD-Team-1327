/*
 * Landing Screen
 */

import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button } from "react-native";
import MenuButton from "../components/MenuButton";
import { get } from "../Db";
import Background from "../assets/landing.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

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
          <MenuButton
            text="Info"
            onPress={handleInfoNav}
            txtColor={"black"}
          ></MenuButton>
          <MenuButton
            text="Review"
            onPress={handleReviewNav}
            txtColor={"black"}
          ></MenuButton>
          <MenuButton
            text="Game"
            onPress={handleGameNav}
            txtColor={"black"}
          ></MenuButton>
          <MenuButton
            text="Sources"
            onPress={handleSourcesNav}
            txtColor={"black"}
          ></MenuButton>
          <MenuButton
            text="Settings"
            onPress={handleSettings1Nav}
            txtColor={"black"}
          ></MenuButton>
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
    top: 55,
    justifyContent: "center",
    marginTop: 90,
  },
  button: {
    color: "black",
  },
});