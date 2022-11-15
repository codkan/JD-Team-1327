import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function LevelButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}
                      accessibilityLabel={"level"} accessibilityRole={"button"} accessibilityHint={"choose level"}>
      <View style={{backgroundColor: "transparent", alignItems: "center", marginHorizontal: 25, marginBottom: 20}}>
        <Text style={{fontSize: 24, textAlign: "center", color: "black"}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}