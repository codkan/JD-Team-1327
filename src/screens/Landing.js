/*
 * Landing Screen
 */

import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button } from "react-native";
import MenuButton from "../components/MenuButton";
import { get } from "../Db";
import Background from "../assets/homescreen.png";
import { Audio } from "expo-av";


export default function Home({ navigation }) {
  const handleInfoNav = () => {
    navigation.navigate("Info");
  };
  const handleReviewNav = () => {
    navigation.navigate("Review");
  };
  const handleGameNav = () => {
    navigation.navigate("Game");
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
            text="SETTINGS"
            onPress={handleSettings1Nav}
            txtColor={"black"}
          ></MenuButton>
        </View>
      </ImageBackground>
    );
  }