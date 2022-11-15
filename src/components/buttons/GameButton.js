import React from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";

export default function GameButton({ text, onPress, visible, img }) {
  let noteContents;
  if (visible) {
    noteContents = (
      <View style={{ marginRight: 20, justifyContent: "center" }}>
        <ImageBackground
          source={img}
          style={{ width: 120, height: 120, visible: false }}
        >
          <Text style={{paddingTop: "35%", color: "black", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>{text}</Text>
        </ImageBackground>
      </View>
    );
  } else {
    noteContents = <View></View>;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!visible}
      accessibilityLabel={"note/speak"}
      accessibilityRole={"button"}
      accessibilityHint={"interacts in game"}
    >
      {noteContents}
    </TouchableOpacity>
  );
}
