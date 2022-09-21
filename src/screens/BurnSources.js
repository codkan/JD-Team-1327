import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function Falls1({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToBurns = () => {
        navigation.navigate("Burns");
    };
    const backToSources = () => {
        navigation.navigate("Sources");
    };
    //Navigates to previous module
    const handleLastNav = () => {
        navigation.navigate("FallSources");
    };
    //Navigate to next module
    const handleNextNav = () => {
        navigation.navigate("PoisoningSources");
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

    <Text allowFontScaling={true} style={CoreStyle.title}> Burnings Sources: </Text>

<View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.childrenssafetynetwork.org/child-safety-topics/fire-burn-safety')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> [1] Fire & Burn Safety </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://ameriburn.org/wp-content/uploads/2018/12/nbaw2019_statsdataresources_120618-1.pdf')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> [2] Scald Statistics and Data </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=burns-overview-90-P01737')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> [3] Overview of Burns </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.uofmhealth.org/health-library/ue5140')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> Child Safety: Preventing Burns </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/safety-burns.html')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> Household Safety: Preventing Burns, Shocks, and Fires </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://raisingchildren.net.au/newborns/safety/burns-scalds-fire/burns-prevention')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> Burns prevention in your home </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=preventing-burn-injuries-90-P01750')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> Preventing Burn Injuries </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/child-safety/art-20044027')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> Burn safety: Protect your child from burns </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <MainButton
          text="Go to Burns"
          onPress={goToBurns}
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