/*
 * Home Screen
 */

import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Background from "../assets/homescreen.png";
import HomeButton from "../components/HomeButton";
import { get } from "../Db";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";

export default function Home({ navigation }) {
  const [unlocked, setLvls] = useState({ lvl2: null, lvl3: null });
  const [sound, setSound] = React.useState();
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  async function playSound() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
      volume: 0.5,
    });
    try {
        const sound = new Audio.Sound();
        setSound(sound);
        await sound.loadAsync(require("../assets/gameMusic.mp3"));
        await sound.playAsync();
    } catch (e) {
        //should be fine
    }
  }
  useEffect(() => {
    async function unlockedLevels() {
      const lvl2 = await get("lvl2");
      const lvl3 = await get("lvl3");

      setLvls({ lvl2: lvl2, lvl3: lvl3 });
    }
    if (sound == undefined) {
      playSound();
    }
    unlockedLevels();
  }, []);
  //Nav Callbacks
  const handlePlayNow = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    sound.pauseAsync();
    if (unlocked["lvl3"] != null) {
      navigation.navigate("LevelThree");
    } else if (unlocked["lvl2"] != null) {
      navigation.navigate("LevelTwo");
    } else {
      navigation.navigate("LevelOne");
    }
  };
  const handleBackNav = () => {
    ScreenOrientation.unlockAsync();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    sound.stopAsync();
    sound.unloadAsync();
    navigation.navigate("Landing");
  };
  const handleLevelSelect = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("LevelSelect", { sound: sound });
  };
  const handleBadgeNav = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("Badges");
  };
  const handleAboutNav = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("About");
  };
  const handleHowToNav = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("HowTo");
  };

  return (
    <ImageBackground source={Background} style={CoreStyle.image}>
      <View style={CoreStyle.homeContainer}>
        <HomeButton
          text="BACK"
          onPress={handleBackNav}
          txtColor={"black"}
        ></HomeButton>
        <HomeButton
          text="ABOUT"
          onPress={handleAboutNav}
          txtColor={"black"}
        ></HomeButton>
        <HomeButton
          text="HOW-TO"
          onPress={handleHowToNav}
          txtColor={"black"}
        ></HomeButton>
        <HomeButton
          text="BADGES"
          onPress={handleBadgeNav}
          txtColor={"black"}
        ></HomeButton>
        <HomeButton
          text="LEVELS"
          onPress={handleLevelSelect}
          txtColor={"black"}
        ></HomeButton>
        <HomeButton
          text="PLAY"
          onPress={handlePlayNow}
          txtColor={"black"}
        ></HomeButton>
      </View>
    </ImageBackground>
  );
}
