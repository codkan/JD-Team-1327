import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Background from "../assets/gameScreens/homescreen.png";
import HomeButton from "../components/buttons/HomeButton";
import { get } from "../Db";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";
import disclaim from "../assets/buttons/info.png";
import mute from "../assets/buttons/mute.png";

export default function Home({ navigation }) {
  const [unlocked, setLvls] = useState({ lvl2: null, lvl3: null });
  const [sound, setSound] = React.useState();
  var muted = global.muted;
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  async function playSound() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: 1,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: 2,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    });
    try {
        const sound = new Audio.Sound();
        sound.volume = global.volume,
        sound.muted = global.muted,
        setSound(sound);
        await sound.loadAsync(require("../assets/sounds/gameMusic.mp3"));
        await sound.playAsync();

    } catch (e) {
        //should be fine
    }
  }

  async function pauseMusic() {
    if (!muted) {
        sound.stopAsync();
        sound.unloadAsync();
        muted = true
    } else {
        await sound.loadAsync(require("../assets/sounds/gameMusic.mp3"));
        await sound.playAsync();
        muted = false;
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
    if (!muted) {
        sound.stopAsync();
        sound.unloadAsync();
    }
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
    if (!muted) {
        sound.stopAsync();
        sound.unloadAsync();
    }
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

    <View style = {CoreStyle.topnavbuttons}>
        <TouchableOpacity onPress={handleAboutNav} accessibilityLabel={"Info"} accessibilityRole={"button"} accessibilityHint={"View information and disclaimer about the game"}>
            <Image source={disclaim} style={CoreStyle.btn}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={pauseMusic} style={CoreStyle.mute_view} accessibilityLabel={"Mute"} accessibilityRole={"button"} accessibilityHint={"Disables music"}>
            <Image source={mute} style={CoreStyle.mute_btn}></Image>
        </TouchableOpacity>
    </View>

      <View style={CoreStyle.homeContainer}>
        <HomeButton
          text="QUIT"
          onPress={handleBackNav}
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
