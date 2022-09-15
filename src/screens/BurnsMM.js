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

export default function BurnsMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToBurns = () => {
        navigation.navigate("Burns");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const handleLastNav = () => {
        navigation.navigate("FallsMM");
    }
    const handleNextNav = () => {
        navigation.navigate("PoisoningsMM");
    }

    const images = [
        {
        url: '',
        props: {
            source: require("../assets/BurnsMM/bmm1.jpeg")
            },
        },
        {
        url: '',
        props: {
            source: require("../assets/BurnsMM/bmm2.png")
            },
        },
        {
        url: '',
        props: {
            source: require("../assets/BurnsMM/bmm3.jpeg")
            },
        },
        {
        url: '',
        props: {
            source: require("../assets/BurnsMM/bmm4.png")
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

    <View style={CoreStyle.mediaContainer}>
        <Text style={CoreStyle.title}> Burns </Text>
        <View style = {CoreStyle.imgview}>
            <ImageViewer imageUrls={images} backgroundColor={"ivory"}/>
        </View>
    </View>

    <VideoPlayer videoID = "IZP_9VIgcnw"/>
    <VideoPlayer videoID = "ZNWjfe-84Ig"/>
    <VideoPlayer videoID = "gMalF0GMLEM"/>

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Burns"
          onPress={goToBurns}
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