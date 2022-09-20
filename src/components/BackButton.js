/*
 * Written by Team 1327 - Cody, Akash, Erin, Aayush, Will
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";

export default function BackButton({ text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: global.color,
    borderColor: "lightgray",
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