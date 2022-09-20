import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { color } from "react-native-reanimated";

export default function MainButton({ text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 345,
    borderRadius: 10,
    backgroundColor: global.color,
    borderColor: global.color3,
    borderWidth: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 30,
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
});