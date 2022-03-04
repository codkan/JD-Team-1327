import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function SourcesButton({ text, onPress, txtColor }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require("../assets/links-line-alt.png")} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
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
    alignItems: "center",
    justifyContent: "center",
    //position: "relative",
    //bottom: 0,
    //right: 0,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    //marginRight: 20,
    marginLeft: 175,
    //marginBottom: 70,
    //alignSelf: "flex-end"
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 32,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});