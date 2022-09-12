/*
 * About Screen
 */

import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import Background from "../assets/instructionScreen.png";
import MenuButton from "../components/MenuButton";
import * as ScreenOrientation from 'expo-screen-orientation'
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
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.contain}>
        <View style={styles.line}>
            <Text style={styles.instruct}> You control a young parent </Text>
            <Image style={styles.pic} source={pc}/>
        </View>
        <View style={styles.line}>
            <Text style={styles.instruct}> You must explore the house and find potential dangers to collect notes </Text>
            <Image style={styles.pic} source={table}/>
        </View>
        <View style={styles.line}>
            <Text style={styles.instruct}> Simply walk up to dangerous things like stoves, lamps, etc. and click the "Collect Note" button </Text>
            <Image style={styles.pic} source={note}/>
        </View>
        <View style={styles.line}>
            <Text style={styles.instruct}> If you are ever confused, find the experienced old nanny </Text>
            <Image style={styles.pic} source={npc}/>
        </View>
        <View style={styles.line}>
            <Text style={styles.instruct}> Just walk up to her and click the "Speak" button for instructions </Text>
            <Image style={styles.pic} source={talk}/>
        </View>
      </View>
      <MenuButton text="GO BACK" txtColor={"black"} onPress={goHome}></MenuButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contain: {
    marginHorizontal: 60,
    marginTop: 150,
    //marginBottom: 50,
    flex: 1,
    flexDirection: "column",
  },
  instruct: {
    fontSize: 15,
  },
  line: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
  },
  pic: {
    height: 50,
    width: 50,
    alignSelf: "center",
  }
});
