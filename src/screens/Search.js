
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { CoreStyle } from "../components/CoreStyle";
import Navbar from "../components/NavBar";
import Background from "../assets/bg.png";

export default function Search({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}>Search</Text>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
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
  modalText: {
    // margin: 100,
    height: 70,
    fontSize: 40,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
});