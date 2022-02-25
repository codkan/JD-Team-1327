import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking, Image, Platform } from "react-native";
import {WebView} from "react-native-webview";
import MediaButton from "../components/MediaButton";
import { get } from "../Db";
import Background from "../assets/bg.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import silent from "../assets/Drowning_Infographic.png";
import { ScrollView } from "react-native";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";

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

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={styles.btns}>
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

    <Text style={styles.title}> Drowning Is Silent </Text>

<View style={styles.container}>

    <Image style={styles.img} source={silent}/>

    <TouchableOpacity onPress={() => Linking.openURL('http://spotthedrowningchild.com/')}>
         <Text style={styles.link}> See just how hard it can be to see a drowning child </Text>
    </TouchableOpacity>

    <View style={styles.buttons}>

    <MainButton
          text="Go to Drowning"
          onPress={goToDrowning}
          txtColor={"black"}
    ></MainButton>

    </View>
</View>

</ScrollView>

    <View style = {styles.pushdown}>
    <Navbar navigation={navigation}/>
    </View>
    

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    img: {
        height: 500,
        width: 320,
    },
    btns: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline"
    },
    subtitle: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    container: {
        alignItems: "center",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 60,
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
    },
    pushdown: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C4C4C4",
    },
});