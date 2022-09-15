import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";
import ImageViewer from "react-native-image-zoom-viewer";

export default function CarSafetyMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    //Traffic is same as car safety
    const goToCarSafety = () => {
        navigation.navigate("Traffic");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    //Naviage to previous page
    const handleLastNav = () => {
        navigation.navigate("DrowningMM");
    }
    //Naviage to next page
    const handleNextNav = () => {
        navigation.navigate("ParentalHealthMM");
    }

    const images = [
        {
        url: '',
        props: {
            source: require("../assets/carSafetyMM/playSafe.jpg")
            },
        },
    ];

    return (
    <ImageBackground source={Background} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Media"
              onPress={backToMedia}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text style={CoreStyle.title}> Car Safety </Text>

    <View style = {CoreStyle.imgview}>
    <ImageViewer imageUrls={images} backgroundColor={"ivory"}/>
    </View>

    <VideoPlayer videoID = "f2GD2HTCNMI"/>

    <View style={CoreStyle.mediaButtons}>
        <MainButton
              text="Go to Car Safety"
              onPress={goToCarSafety}
              txtColor={"black"}
        ></MainButton>
    </View>
</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}