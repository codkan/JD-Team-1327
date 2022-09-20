/*
 * About Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import Background from "../assets/instructionScreen.png";
import MenuButton from "../components/MenuButton";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";
import pc from "../assets/player.png";
import npc from "../assets/npc.png";
import talk from "../assets/speak.png";
import note from "../assets/note.png";
import table from "../assets/living-room/side-table.png";



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
            <Text allowFontScaling={true} fontSize={15}> You control a young parent </Text>
            <Image style={CoreStyle.pic} source={pc}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={15}> You must explore the house and find potential dangers to collect notes </Text>
            <Image style={CoreStyle.pic} source={table}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={15}> Simply walk up to dangerous things like stoves, lamps, etc. and click the "Collect Note" button </Text>
            <Image style={CoreStyle.pic} source={note}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={15}> If you are ever confused, find the experienced old nanny </Text>
            <Image style={CoreStyle.pic} source={npc}/>
        </View>
        <View style={CoreStyle.line}>
            <Text allowFontScaling={true} fontSize={15}> Just walk up to her and click the "Speak" button for instructions </Text>
            <Image style={CoreStyle.pic} source={talk}/>
        </View>
      </View>
      <MenuButton text="GO BACK" txtColor={"black"} onPress={goHome}></MenuButton>
    </ImageBackground>
  );
}
