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
  const handleSavedNav = () => {
    navigation.navigate("Saved");
  };
  const handleSearchNav = () => {
    navigation.navigate("Search");
  };
  const handleGlobalNav = async () => {
    if (global.user_id != null) {
        navigation.navigate("Menu", {module: "GlobalBoard"});
    } else {
        Alert.alert(
            'You Are Not Logged In',
            "You are trying to access Global Leaderboard rankings without logging in\n\nYou must login to view Global Leaderboard rankings\n\nWould you like to log in?",
            [
                {text: 'NO', style: 'destructive'},
                {text: 'YES', style: 'cancel', onPress: await handleLogin()},
                {text: 'CLOSE', style: 'default'},
            ],
        );
    }
  };

  return (
      <View style={styles.navBar}>

        <TouchableOpacity onPress={() => handleSavedNav()} style={styles.icons}
                          accessibilityLabel={"Bookmarks"} accessibilityRole={"button"} accessibilityHint={"view saved sections"}>
            <Image source={require("../assets/nav/bookmark.png")} style={styles.icon}></Image>
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
        global.color2 = "powderblue";
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