/*
 * Application Settings Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/settingsScreen.png";

export default function Settings({ navigation}) {
  const [soundOn, setSoundOn] = React.useState(true);
  // NAV CALLBACKS
  const goHome = () => {
    navigation.navigate("Home");
  };

  const stopSound = () => {
    // const sound = navigation.getParam('sound')
    // if (sound) {
      // sound.unloadAsync();
    // }
    setSoundOn(false);
  }

  return (
    <ImageBackground source={Background} style={styles.image}>
      <MenuButton text="STOP SOUND" txtColor={"black"} onPress={stopSound}></MenuButton>
      {/* <Text style={styles.modalText2}> Disclaimer:</Text>
      <Text style={styles.modalText}> This product is for educational and informational purposes only and is solely designed as a helpful tool for users to think about child safety and the devastating consequences of childhood injuries. </Text>
      <Text style={styles.modalText}> It is not intended to be a substitute for professional healthcare advice from the user’s service provider. Safety recommendations can change over time. Further, this application does not cover all areas of child safety necessary to prevent injuries and death of infants and toddlers. </Text>
      <Text style={styles.modalText}> Users are strongly encouraged to seek more comprehensive safety information and advice from their healthcare service provider. Information presented in this application is provided in good faith and reflects current childcare practices as expressed by experts in the field. </Text> */}
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
  modalText: {
    width: 850,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText2: {
    marginTop: 75,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
