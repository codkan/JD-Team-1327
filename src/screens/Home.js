/*
 * Home Screen
 */

import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Background from "../assets/homescreen.png";
import MenuButton from "../components/MenuButton";
import { get } from "../Db";

export default function Home({ navigation }) {
  const [unlocked, setLvls] = useState({ lvl2: null, lvl3: null });
  const [sound, setSound] = React.useState();
  async function playSound() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
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
    //console.log(sound)
    if (sound == undefined) {
      playSound();
    }
    unlockedLevels();
  }, []);
  //Nav Callbacks
  const handlePlayNow = () => {
    sound.pauseAsync();
    if (unlocked["lvl3"] != null) {
      navigation.navigate("LevelThree");
    } else if (unlocked["lvl2"] != null) {
      navigation.navigate("LevelTwo");
    } else {
      navigation.navigate("LevelOne");
    }
  };
  const handleLevelSelect = () => {
    navigation.navigate("LevelSelect", { sound: sound });
  };
  const handleBadgeNav = () => {
    navigation.navigate("Badges");
  };
  const handleAboutNav = () => {
    navigation.navigate("About");
  };
  const handleBackNav = () => {
    sound.stopAsync();
    sound.unloadAsync();
    navigation.navigate("Landing");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.buttonContainer}>
        <MenuButton
          text="PLAY NOW"
          onPress={handlePlayNow}
          txtColor={"black"}
        ></MenuButton>
        <MenuButton
          text="LEVEL SELECT"
          onPress={handleLevelSelect}
          txtColor={"black"}
        ></MenuButton>
        <MenuButton
          text="BADGES"
          onPress={handleBadgeNav}
          txtColor={"black"}
        ></MenuButton>
        <MenuButton
          text="ABOUT"
          onPress={handleAboutNav}
          txtColor={"black"}
        ></MenuButton>
        <MenuButton
          text="BACK"
          onPress={handleBackNav}
          txtColor={"black"}
        ></MenuButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    top: 55,
    justifyContent: "center",
    marginTop: 90,
  },
  button: {
    color: "black",
  },
});
