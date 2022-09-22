import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import MediaButton from "../components/buttons//MediaButton";
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
    const goToTraffic = () => {
        navigation.navigate("Traffic");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }
    const handleLastNav = () => {
        navigation.navigate("DrowningSources");
    };
    const handleNextNav = () => {
        navigation.navigate("ParentalHealthSources");
    };

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Sources"
              onPress={backToSources}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={handleNextNav}
        ></BackButton>
    </View>

<ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}> Car Safety Sources: </Text>
    <Text allowFontScaling={true}> {'\n'} </Text>

<View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> [1] Car Safety </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <MainButton
          text="Go to Car Safety"
          onPress={goToTraffic}
          txtColor={global.text}
    ></MainButton>

    </View>
</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}
