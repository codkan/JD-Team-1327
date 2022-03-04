import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText, {color: txtColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
MenuButton.defaultProps = {
  color: "black"
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
