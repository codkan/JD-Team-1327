/*
 * About Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/gameScreens/aboutScreen.png";
import MenuButton from "../components/buttons/MenuButton";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";

export default function About({ navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={Background} style={CoreStyle.image}>
      <View style={CoreStyle.contain}>
      <Text allowFontScaling={true} style={CoreStyle.minorText}>
        Welcome to Child Safe: The Video Game! {'\n'}
        Team Client: Dr. Ann McClellan {'\n'}
        Team: Sora Bang, Justin Deal, Jayla Demaine, Elina Ebby, Sam Thomas, David Okao
      </Text>
      <Text allowFontScaling={true} style={CoreStyle.disclaimer}>
        Disclaimer: {'\n'}
        Team 1327, responsible for the rest of application, claims no ownership of this game as it was developed by Team BeDot a semester beforehand for the same client. {'\n'}
        This product is for educational and informational purposes only and is solely designed as a helpful tool for users to think about child safety and the devastating consequences of childhood injuries. {'\n'}
        It is not intended to be a substitute for professional healthcare advice from the user’s service provider. Safety recommendations can change over time. Further, this application does not cover all areas of child safety necessary to prevent injuries and death of infants and toddlers. {'\n'}
        Users are strongly encouraged to seek more comprehensive safety information and advice from their healthcare service provider. Information presented in this application is provided in good faith and reflects current childcare practices as expressed by experts in the field.
        </Text>
      </View>
      <MenuButton text="GO BACK" txtColor={"black"} onPress={goHome}></MenuButton>
    </ImageBackground>
  );
}