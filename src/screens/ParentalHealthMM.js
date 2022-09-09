import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import ppd from "../assets/parentalHealthMM/ppd1.jpg";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function ParentalHealthMM({ navigation }) {
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
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const handleLastNav = () => {
        navigation.navigate("CarSafetyMM");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

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
    </View>

    <ScrollView>

    <Text style={CoreStyle.title}> Parental Health </Text>

<View style={CoreStyle.mediaContainer}>

    <Image style={styles.img} source={ppd}/>

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Parental Health"
          onPress={goToParentalHealth}
          txtColor={"black"}
    ></MainButton>

    </View>
</View>
</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    img: {
        height: 625,
        width: "100%",
        marginBottom: 20,
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
    }
});