import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


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
  const handleReviewNav = () => {
        navigation.navigate("Review");
    };
  const handleSourcesNav = () => {
    navigation.navigate("Sources");
  };

  return (
      <View style={styles.navBar}>

        <TouchableOpacity onPress={handleSourcesNav} style={styles.icons}>
            <Image source={require("../assets/nav/links.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleInfoNav} style={styles.icons}>
            <Image source={require("../assets/nav/modules.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHomeNav} style={styles.icons}>
            <Image source={require("../assets/nav/home-fill.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleReviewNav} style={styles.icons}>
            <Image source={require("../assets/nav/rev.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSettings1Nav} style={styles.icons}>
            <Image source={require("../assets/nav/settings.png")} style={styles.icon}></Image>
        </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
    navBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#C4C4C4",
    },
    icons: {
        width: 50,
        height: 50,
        paddingHorizontal: 40,
        justifyContent: "center",
        alignItems: "center",
      },
    icon: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },

  });