import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import {handleLogin} from "./Login.js";


export default function Navbar({ navigation }){
  const goMenu = (_module) => {
    navigation.navigate("Menu", {module: _module});
  }
  const handleHomeNav = () => {
    navigation.navigate("Landing");
  }
  const handleSearchNav = () => {
    navigation.navigate("Search");
  };
  const handleGlobalNav = () => {
    if (global.user_id != null) {
        navigation.navigate("Menu", {module: "GlobalBoard"});
    } else {
        Alert.alert(
            'You Are Not Logged In',
            "You are trying to access Global Leaderboard rankings without logging in\n\nYou must login to view Global Leaderboard rankings\n\nWould you like to log in?",
            [
                {text: 'NO', style: 'destructive'},
                {text: 'CLOSE', style: 'cancel'},
                {text: 'YES', style: 'default', onPress: () => handleLogin()},
            ],
        );
    }
  };

  return (
      <View style={styles.navBar}>

        <TouchableOpacity onPress={() => goMenu("Resources")} style={styles.icons}
                          accessibilityLabel={"Sources"} accessibilityRole={"button"} accessibilityHint={"view references"}>
            <Image source={require("../assets/nav/links.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goMenu("LocalBoard")} style={styles.icons}
                          accessibilityLabel={"Local Leaderboard"} accessibilityRole={"button"} accessibilityHint={"view your quiz scores"}>
            <Image source={require("../assets/nav/local.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleHomeNav()} style={styles.icons}
                          accessibilityLabel={"Home"} accessibilityRole={"button"} accessibilityHint={"return to landing page"}>
            <Image source={require("../assets/nav/home-fill.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleGlobalNav()} style={styles.icons}
                          accessibilityLabel={"Global Leaderboard"} accessibilityRole={"button"} accessibilityHint={"view all users' level completion times"}>
            <Image source={require("../assets/nav/global.png")} style={styles.icon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSearchNav()} style={styles.icons}
                          accessibilityLabel={"Search"} accessibilityRole={"button"} accessibilityHint={"Go to search screen"}>
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