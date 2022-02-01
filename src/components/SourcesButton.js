import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";

export default function SourcesButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
SourcesButton.defaultProps = {
  color: "black"
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    //paddingVertical: 7,
    //paddingHorizontal: 10,
    //marginVertical: 10,
    backgroundColor: "rgba(196,196,196,1)",
    //alignItems: "right",
    //justifyContent: "right",
    //position: "relative",
    //bottom: 0,
    right: 0,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    marginRight: 20,
    marginLeft: 80,
    marginBottom: 50,
    alignSelf: "flex-end"

  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 32,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});