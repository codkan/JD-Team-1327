import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


export default function Navbar({ navigation }){
  const handleInfoNav = () => {
    navigation.navigate("Info");
  };
  const handleHomeNav = () => {
    navigation.navigate("Landing");
  };
  const handleSearchNav = () => {
    navigation.navigate("Search");
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

        <TouchableOpacity onPress={handleSearchNav} style={styles.icons}>
            <Image source={require("../assets/nav/search.png")} style={styles.icon}></Image>
        </TouchableOpacity>

      </View>
  );
}

    if (global.scheme == "dark") {
        global.color = "darkslategrey";
        global.color2 = "lightslategray";
        global.color3 = "black";
        global.text = "white";
    } else {
        global.color = "ivory";
        global.color2 = "papayawhip";
        global.color3 = "lightgray";
        global.text = "black";
    }

const styles = StyleSheet.create({
    navBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: global.color,
      borderTopColor: global.color3,
      borderTopWidth: 2,
      borderTopOpacity: 0.5,
      paddingTop: 5,
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