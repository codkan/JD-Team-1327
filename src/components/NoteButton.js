import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";

export default function MenuButton({ text, onPress, visible }) {
  let noteContents;
  if (visible) {
    noteContents = (
      <ImageBackground
        source={require("../assets/note.png")}
        style={{ width: 100, height: 100, visible: !visible }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </ImageBackground>
    );
  } else {
    noteContents = <View></View>;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      styles={styles.container}
      disabled={!visible}
    >
      {noteContents}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    borderRadius: 10,
    paddingVertical: "25%",
    paddingHorizontal: 0,
    backgroundColor: "red",
    alignItems: "center",
  },
  buttonText: {
    paddingTop: "35%",
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
