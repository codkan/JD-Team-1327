/*
 * Level Select Screen
 */

import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Background from "../assets/gameScreens/levelSelect.png";
import LevelButton from "../components/buttons/LevelButton";
import { get } from "../Db";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";

export default function LevelSelect({ navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  const [unlocked, setLvls] = useState({ lvl2: null, lvl3: null });
  useEffect(() => {
    async function unlockedLevels() {
      const lvl2 = await get("lvl2");
      const lvl3 = await get("lvl3");

      setLvls({ lvl2: lvl2, lvl3: lvl3 });
    }
    unlockedLevels();
  }, []);
  //NAV CALLBACKS
  const launchLevelOne = () => {
    if (navigation.getParam("sound") !== undefined) {
      navigation.getParam("sound").unloadAsync();
    }
    navigation.navigate("LevelOne");
  };
  const launchLevelTwo = () => {
    if (navigation.getParam("sound") !== undefined) {
      navigation.getParam("sound").unloadAsync();
    }
    navigation.navigate("LevelTwo");
  };
  const launchLevelThree = () => {
    if (navigation.getParam("sound") !== undefined) {
      navigation.getParam("sound").unloadAsync();
    }
    navigation.navigate("LevelThree");
  };
  const goHome = () => {
    navigation.pop();
  };

  if (unlocked["lvl3"] != null) {
    return (
      <ImageBackground source={Background} style={CoreStyle.image}>
        <View style={CoreStyle.levelContainer}>
        <LevelButton
          text="LIVING ROOM"
          onPress={launchLevelOne}
          txtColor={"black"}
        ></LevelButton>
        <LevelButton
          text="KITCHEN"
          onPress={launchLevelTwo}
          txtColor={"black"}
        ></LevelButton>
        <LevelButton
          text="BACKYARD"
          onPress={launchLevelThree}
          txtColor={"black"}
        ></LevelButton>
        <LevelButton
          text="GO BACK"
          onPress={goHome}
          txtColor={"black"}
        ></LevelButton>
        </View>
      </ImageBackground>
    );
  } else if (unlocked["lvl2"] != null) {
    return (
      <ImageBackground source={Background} style={CoreStyle.image}>
        <View style={CoreStyle.levelContainer}>
          <LevelButton
            text="LIVING ROOM"
            onPress={launchLevelOne}
            txtColor={"black"}
          ></LevelButton>
          <LevelButton
            text="KITCHEN"
            onPress={launchLevelTwo}
            txtColor={"black"}
          ></LevelButton>
          <LevelButton
            text="GO BACK"
            onPress={goHome}
            txtColor={"black"}
          ></LevelButton>
        </View>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground source={Background} style={CoreStyle.image}>
      <View style={CoreStyle.levelContainer}>
        <LevelButton
          text="LIVING ROOM"
          onPress={launchLevelOne}
          txtColor={"black"}
        ></LevelButton>
        <LevelButton
          text="GO BACK"
          onPress={goHome}
          txtColor={"black"}
        ></LevelButton>
      </View>
      </ImageBackground>
    );
  }
}
