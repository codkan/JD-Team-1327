import React from "react";
import { View, StyleSheet, Button, Image, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Home from "../assets/home-fill.png";
import Source from "../assets/links-line.png"
import Settings from "../assets/settings-3-fill(1).png"
import Toc from "../assets/file-text-fill.png"
import Tts from "../assets/volume-up-line.png"


export default function Navbar({ navigation }){
  const handleInfoNav = () => {
    navigation.navigate("Info");
  };
  const handleHomeNav = () => {
    navigation.navigate("Landing");
  };
  const handleSettings1Nav = () => {
    navigation.navigate("Settings1");
  };
  const handleSourcesNav = () => {
    navigation.navigate("Sources");
  };

  return (
      <View style={styles.navBar}>
        <ImageBackground source={Toc} style={styles.toc}>
        <Button
          title="   "
          onPress={handleInfoNav}
          txtColor={"black"}
        ></Button></ImageBackground>
        
        <ImageBackground source={Source} style={styles.icon}>
        <Button
          title="Sources"
          onPress={handleSourcesNav}
          txtColor={"black"}
        ></Button></ImageBackground>
        <ImageBackground source={Home} style={styles.icon}>
        <Button
          title="Home"
          onPress={handleHomeNav}
          txtColor={"black"}
        ></Button></ImageBackground>
        <ImageBackground source={Settings} style={styles.icon}>
        <Button
          title="Settings"
          onPress={handleSettings1Nav}
          txtColor={"black"}
        ></Button></ImageBackground>
      </View>
  );

}

const styles = StyleSheet.create({
    navBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    
      
    },
    icon: {
        width: 30,
        height: 30,
        paddingHorizontal: 10,
      },
    home: {
        width: 30,
        height: 30,
    },
    settings: {
        width: 30,
        height: 30,
    },
    tts: {
        width: 30,
        height: 30,
    },
    source: {
        width: 30,
        height: 30,
    },
    toc: {
        width: 30,
        height: 30,
    }

  });