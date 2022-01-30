import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import MenuButton from "../components/MenuButton";
import Background from "../assets/SourcesBackground.png";
import MainButton from "../components/MainButton";
import Constants from "../Constants";
import Navbar from "../components/NavBar";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  const handleGoToPoisoningSource = () => {
    navigation.navigate("PoisoningSources");
  };

  const handleGoToBurnSource = () => {
    navigation.navigate("BurningSources");
  };

  const handleGoToFallSource = () => {
      navigation.navigate("FallSources");
    };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <Text style={styles.modalText}> Sources </Text>
      <View style = {styles.buttonContainer}>
          <MainButton
            text="Falls Sources"
            txtColor={"black"}
            onPress={handleGoToFallSource}
          ></MainButton>

          <MainButton
            text="Burning Sources"
            txtColor={"black"}
            onPress={handleGoToBurnSource}
          ></MainButton>

          <MainButton
            text="Poisoning Sources"
            txtColor={"black"}
            onPress={handleGoToPoisoningSource}
          ></MainButton>

          <MainButton
            text="Source 4"
            txtColor={"black"}
          ></MainButton>

          <MainButton
            text="Source 5"
            txtColor={"black"}
          ></MainButton>

          <MainButton
            text="Source 6"
            txtColor={"black"}
          ></MainButton>

        </View>
      <View style = {styles.pushdown} >
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

  buttonContainer: {
      flex: 1,
      top: -80,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
  },

  modalText: {
      // margin: 100,
      height: 70,
      fontSize: 40,
      marginTop: 100,
      marginBottom: 15,
      fontWeight: "bold",
      textAlign: "center",
  },

  pushdown: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#C4C4C4",
   },

  /* rectangle: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT * 0.1,
    color: "black"
  }, */


});