import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TopicButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}
                      accessibilityLabel={"Topics"} accessibilityRole={"button"} accessibilityHint={"returns to topics"}>
        <Text style={styles.buttonText}>{text}</Text>
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
        global.color2 = "powderblue";
        global.color3 = "lightgray";
        global.text = "black";
    }

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
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
    marginTop: 0,
    marginBottom: 0,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 14,
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
});