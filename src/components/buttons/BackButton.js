/*
 * Written by Team 1327 - Cody, Akash, Erin, Aayush, Will
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { color } from "react-native-reanimated";

export default function BackButton({ text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} accessible={true}
                      accessibilityLabel={"Page"} accessibilityRole={"button"} accessibilityHint={"moves pages"}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

    if (global.scheme == "dark") {
        global.color = "darkslategrey";
        global.color2 = "lightslategray";
        global.color3 = "black";
        global.text = "white";
    } else {
        global.color = "ivory";
        global.color2 = "papayawhip";
        global.color3 = "lightgray";
        global.text = "black";
    }

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: global.color,
    borderColor: global.color3,
    borderWidth: 2,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 32,
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
});