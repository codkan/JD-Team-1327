/*
 * About Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Background from "../assets/gameScreens/instructionScreen.png";
import MenuButton from "../components/buttons/MenuButton";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";
import pc from "../assets/gameItems/player.png";
import npc from "../assets/gameItems/npc.png";
import talk from "../assets/gameItems/speak.png";
import note from "../assets/gameItems/note.png";
import table from "../assets/living-room/side-table.png";

var MAX_HEIGHT = Dimensions.get("screen").height;
var MAX_WIDTH = Dimensions.get("screen").width;

export default function About({ navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={Background} style={CoreStyle.image}>
      <View style={CoreStyle.howContain}>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={MAX_HEIGHT/56.73}> You control a young parent </Text>
            <Image style={CoreStyle.pic} source={pc}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={MAX_HEIGHT/56.73}> You must explore the house and find potential dangers to collect notes </Text>
            <Image style={CoreStyle.pic} source={table}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={MAX_HEIGHT/56.73}> Simply walk up to dangerous things like stoves, lamps, etc. and press this </Text>
            <Image style={CoreStyle.pic} source={note}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={MAX_HEIGHT/56.73}> If you are ever confused, find the experienced old nanny </Text>
            <Image style={CoreStyle.pic} source={npc}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={MAX_HEIGHT/56.73}> Just walk up to her and click the "Speak" button for instructions </Text>
            <Image style={CoreStyle.pic} source={talk}/>
        </View>
      </View>
      <MenuButton text="GO BACK" txtColor={"black"} onPress={goHome}></MenuButton>
    </ImageBackground>
  );
}
