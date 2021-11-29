import React from "react";
import NavButton from "./NavButton";
import { View, StyleSheet, Button, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';


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
        <Button
          title="Info"
          onPress={handleInfoNav}
        ></Button>
        <Button
          title="Home"
          onPress={handleHomeNav}
          txtColor={"black"}
        ></Button>
        <Button
          title="Sources"
          onPress={handleSourcesNav}
          txtColor={"black"}
        ></Button>
        <Button
          title="Settings"
          onPress={handleSettings1Nav}
          txtColor={"black"}
        ></Button>
      </View>
  );

}

const styles = StyleSheet.create({
    navBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  });