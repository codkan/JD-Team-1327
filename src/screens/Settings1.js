import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/aboutScreen.png";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});