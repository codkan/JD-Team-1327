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

  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style = {styles.buttons} > 
        <Text style={styles.titleText}> Sources </Text>
          <MainButton
            text="Source 1"
            txtColor={"black"}
          ></MainButton>

          <MainButton
            text="Source 2"
            txtColor={"black"}
          ></MainButton>

          <MainButton
            text="Source 3"
            txtColor={"black"}
          ></MainButton>

          <MainButton
            text="Source 4"
            txtColor={"black"}
          ></MainButton>

          <MainButton
            text="Source 5"
            txtColor={"black"}
          ></MainButton>

          
        <MenuButton text="BACK" txtColor={"black"} onPress={goHome}></MenuButton>
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

  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  pushdown: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }

  /* rectangle: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT * 0.1,
    color: "black"
  }, */


});