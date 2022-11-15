import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function MenuButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}
                      accessibilityLabel={"Back"} accessibilityRole={"button"} accessibilityHint={"Go Back"}>
      <View style={{backgroundColor: "transparent", alignItems: "center", marginHorizontal: 25, marginBottom: 30}}>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}