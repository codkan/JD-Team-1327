/*
 * About Screen
 */

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
      {/* <Text style={styles.modalText, {marginTop: 100}}> Welcome to Child Safe!</Text> */}
      {/* <Text style={styles.modalText}> Team: Sora Bang, Justin Deal, Jayla Demaine, Elina Ebby, Sam Thomas, David Okao</Text> */}
      <View style={styles.contain}>
      <Text style={styles.modalText}> Team Client: Dr. Ann McClellan</Text>
      <Text style={styles.disclaimer}> Disclaimer: </Text>
      <Text style={styles.disclaimer}> This product is for educational and informational purposes only and is solely designed as a helpful tool for users to think about child safety and the devastating consequences of childhood injuries. </Text>
      <Text style={styles.disclaimer}> It is not intended to be a substitute for professional healthcare advice from the user’s service provider. Safety recommendations can change over time. Further, this application does not cover all areas of child safety necessary to prevent injuries and death of infants and toddlers. </Text>
      <Text style={styles.disclaimer}> Users are strongly encouraged to seek more comprehensive safety information and advice from their healthcare service provider. Information presented in this application is provided in good faith and reflects current childcare practices as expressed by experts in the field. </Text>
      </View>
      <MenuButton text="GO BACK" txtColor={"black"} onPress={goHome}></MenuButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contain: {
    marginHorizontal: 50,
    marginTop: 160,
  },
  modalText: {
    // margin: 100,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  disclaimer: {
    fontSize: 10,
    marginTop: 4,
    marginLeft: 10,
  }
});
