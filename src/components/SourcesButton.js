import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MMButton({ text, onPress }) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={require("../assets/links-line-alt.png")} style={styles.icon}></Image>
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
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    marginLeft: 20,
    marginRight: 80,
    marginBottom: 70,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 32,
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
  icon: {
    height: 33,
    width: 36,
  }
});