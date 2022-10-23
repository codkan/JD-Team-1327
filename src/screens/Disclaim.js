/*
 * Disclaimer & About Screen
 */

import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Background from "../assets/gameScreens/disclaimScreen.png";
import MenuButton from "../components/buttons/MenuButton";
import { CoreStyle } from "../components/CoreStyle.js";

export default function Disclaim({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={Background} style={CoreStyle.image}>
      <View style={CoreStyle.container}>
      <Text allowFontScaling={true} style={CoreStyle.minorText}>
      Client: Dr. Ann McClellan {'\n'}
      Team: Cody Kantor, Aayush Dixit, William Wynne, Erin Falejczyk, and Akash Vemulapalli
      </Text>

      <Text allowFontScaling={true} style={CoreStyle.about}>{'\t'}This application was initially
      built around the game created by Team BeDot.
      But we have worked hard on expanding it and we hope that the valuable information presented
      can help new parents and other caregivers unnecessary injuries and deaths caused by child accidents. {'\n'}
      </Text>

      <View style={CoreStyle.contain}>
      <Text allowFontScaling={true} style={CoreStyle.about}>Disclaimer:{'\n'}{'\n'}
      This product and the game therein is for educational and informational purposes only
      and is solely designed as a helpful tool for users to think about child safety and the devastating
      consequences of childhood injuries. {'\n'}{'\n'}
      It is not intended to be a substitute for professional healthcare
      advice from the user’s service provider. Safety recommendations can change over time. Further,
      this application does not cover all areas of child safety necessary to prevent injuries and
      death of infants and toddlers. {'\n'}{'\n'}
      Users are strongly encouraged to seek more comprehensive safety
      information and advice from their healthcare service provider. Information presented in this
      application is provided in good faith and reflects current childcare practices as expressed by
      experts in the field. {'\n'}</Text>
      </View>
      </View>
      <MenuButton text="GO BACK" txtColor={"black"} textSize={20} onPress={goHome}></MenuButton>

    </ImageBackground>
  );
}
