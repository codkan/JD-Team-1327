import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

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

  const handleGoToDrowningSource = () => {
    navigation.navigate("DrowningSources");
  };

  const handleGoToTrafficSource = () => {
    navigation.navigate("TrafficSources");
  };

  const handleGoToParentalHealthSource = () => {
      navigation.navigate("ParentalHealthSources");
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
            text="Drowning Sources"
            txtColor={"black"}
            onPress={handleGoToDrowningSource}
          ></MainButton>

          <MainButton
            text="Car Safety Sources"
            txtColor={"black"}
            onPress={handleGoToTrafficSource}
          ></MainButton>

          <MainButton
            text="Parent Health Sources"
            txtColor={"black"}
            onPress={handleGoToParentalHealthSource}
          ></MainButton>

        </View>
      <View style = {CoreStyle.pushdown} >
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

  /* rectangle: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT * 0.1,
    color: "black"
  }, */


});