import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";

export default function MainButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText, {color: txtColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
MainButton.defaultProps = {
  color: "black"
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 345,
    borderRadius: 10,
    paddingVertical: 7,
    //paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    justifyContent: "center",
  },
});