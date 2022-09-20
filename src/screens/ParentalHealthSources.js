import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function ParentalHealth({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToParentalHealth = () => {
        navigation.navigate("ParentalHealth");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }
    const handleLastNav = () => {
        navigation.navigate("DrowningSources");
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
    <View style={CoreStyle.invisible}/>
    </View>

<ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}> Parental Health Sources: </Text>
    <Text allowFontScaling={true}> {'\n'} </Text>

<View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/ppd.html')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> [1] Parental Health </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617')}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}> [2] Parental Health </Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <MainButton
          text="Go to Parental Health"
          onPress={goToParentalHealth}
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
