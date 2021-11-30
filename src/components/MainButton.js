import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";

export default function MainButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
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
    backgroundColor: "rgba(196,196,196,1)",
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
    fontSize: 32,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});