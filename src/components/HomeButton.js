import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
HomeButton.defaultProps = {
  color: "black"
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
  },
});