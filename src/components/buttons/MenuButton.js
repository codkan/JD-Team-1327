import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}
                      accessibilityLabel={"Back"} accessibilityRole={"button"} accessibilityHint={"Go Back"}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    alignItems: "center",
    marginHorizontal: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
});
