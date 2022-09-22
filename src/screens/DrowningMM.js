import React from "react";
import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import MediaButton from "../components/buttons/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";
import ImageViewer from "react-native-image-zoom-viewer";

export default function DrowningMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToDrowning = () => {
        navigation.navigate("Drownings");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const handleLastNav = () => {
        navigation.navigate("PoisoningsMM");
    }
    const handleNextNav = () => {
        navigation.navigate("CarSafetyMM");
    }

    const images = [
        {
        url: '',
        props: {
            source: require("../assets/drownMM/Drowning_Infographic.png")
            },
        },
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

        <Text allowFontScaling={true} style={CoreStyle.title}> Drownings </Text>

        <View style = {CoreStyle.imgview}>
        <ImageViewer imageUrls={images} backgroundColor={global.color}/>
        </View>

        <VideoPlayer videoID = "L0KTqPloUiU"/>

        <View style={CoreStyle.mediaButtons}>
            <MainButton
                  text="Go to Drowning"
                  onPress={goToDrowning}
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