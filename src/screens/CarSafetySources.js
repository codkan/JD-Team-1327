import React from "react";
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/info_background.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function CarSafety({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToPoisonings = () => {
        navigation.navigate("Burns");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }

    return (
    <ImageBackground source={Background} style={CoreStyle.image}>
    <Text style={CoreStyle.title}> Car Safety Sources: </Text>
    <Text> {'\n'} </Text>

<View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] Car Safety </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <MainButton
          text="Go to Burns"
          onPress={goToPoisonings}
          txtColor={"black"}
    ></MainButton>

    <MainButton
          text="Back to Sources"
          onPress={backToSources}
          txtColor={"black"}
    ></MainButton>
    </View>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}