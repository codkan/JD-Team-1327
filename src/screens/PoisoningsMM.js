import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";
import ImageViewer from "react-native-image-zoom-viewer";

export default function PoisoningsMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToPoisonings = () => {
        navigation.navigate("Poisonings");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const handleLastNav = () => {
        navigation.navigate("BurnsMM");
    }
    const handleNextNav = () => {
        navigation.navigate("DrowningMM");
    }

    const images = [
        {
        url: '',
        props: {
            source: require("../assets/PoisoningsMM/PoisoningMM2.jpg")
            },
        },
        {
        url: '',
        props: {
            source: require("../assets/PoisoningsMM/PMM3.png")
            },
        },
        {
        url: '',
        props: {
            source: require("../assets/PoisoningsMM/PMM5.jpg")
            },
        }
    ];

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Media"
              onPress={backToMedia}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView> 

    <View style={CoreStyle.mediaContainer}>
    <Text allowFontScaling={true} style={CoreStyle.title}> Poisonings </Text>
        <View style = {CoreStyle.imgview}>
            <ImageViewer imageUrls={images} backgroundColor={global.color}/>
        </View>
    </View>

    <VideoPlayer videoID = "JQob-pwLZJ8"/>
    <VideoPlayer videoID = "Hu1NEWaOISo"/>
    <VideoPlayer videoID = "7Et7lrqVy04"/>

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Poison"
          onPress={goToPoisonings}
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