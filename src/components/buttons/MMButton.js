import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";

var MAX_HEIGHT = Dimensions.get("screen").height;
var MAX_WIDTH = Dimensions.get("screen").width;

export default function SourcesButton({ text, onPress, txtColor }) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Image source={require("../../assets/buttons/media.png")} style={styles.icon}></Image>
        </View>
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
    marginLeft: MAX_WIDTH*0.44,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 32,
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
  icon: {
    height: 30,
    width: 33,
    marginBottom: 2,
  }
});