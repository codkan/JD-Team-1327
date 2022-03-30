/*
 * Disclaimer & About Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/disclaimScreen.png";
import MenuButton from "../components/MenuButton";

export default function Disclaim({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.container}>
      <Text style={styles.modalText}> Welcome to Child Safe! {'\n'}
      Team Client: Dr. Ann McClellan {'\n'}
      Team: Cody Kantor, Aayush Dixit, William Wynne, {'\n'} Erin Falejczyk, and Akash Vemulapalli
      </Text>

      <Text style={styles.disclaimer}>{'\t'}This application was developed in 2022 for Dr. Ann McClellan
      by a team of five students studying Computer Science at the Georgia Institute of Technology.
      Initially, it was built around the standalone game created by the original team, Team BeDot.
      But we have worked incredibly hard on expanding this application and we all hope that the valuable information presented
      can help new parents and other caregivers prevent some of the unnecessary injuries and deaths caused by child accidents. {'\n'}
      </Text>

      <View style={styles.contain}>
      <Text style={styles.disclaimer}>Disclaimer: </Text>
      <Text style={styles.disclaimer}>This product and the game therein is for educational and informational purposes only
      and is solely designed as a helpful tool for users to think about child safety and the devastating
      consequences of childhood injuries. {'\n'}</Text>
      <Text style={styles.disclaimer}>It is not intended to be a substitute for professional healthcare
      advice from the user’s service provider. Safety recommendations can change over time. Further,
      this application does not cover all areas of child safety necessary to prevent injuries and
      death of infants and toddlers. {'\n'}</Text>
      <Text style={styles.disclaimer}>Users are strongly encouraged to seek more comprehensive safety
      information and advice from their healthcare service provider. Information presented in this
      application is provided in good faith and reflects current childcare practices as expressed by
      experts in the field. {'\n'}</Text>
      </View>
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
    marginHorizontal: 25,
    //marginTop: 160,
  },
  container: {
    marginTop: 50,
    marginBottom: 25,
    marginHorizontal: 10,
  },
  modalText: {
    marginTop: 150,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  disclaimer: {
    fontSize: 12,
    marginHorizontal: 10,
  }
});
