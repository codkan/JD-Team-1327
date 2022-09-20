import React, {Component} from "react";
import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import TopicButton from "../components/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import basket from "../assets/gift_basket.png";

export default function Win({navigation}){

    const goToInfo = () => {
        navigation.navigate("Info");
    };
    const backToReview = () => {
        navigation.navigate("Review");
    };

    const score = navigation.getParam('score');
    const total = navigation.getParam('total');
    const txt = navigation.getParam('text');

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <TopicButton
              text="Back to Quizzes"
              onPress={backToReview}
              txtColor={global.text}
        ></TopicButton>
        <TopicButton
            text="Go to Topics"
            txtColor={global.text}
            onPress={goToInfo}
        ></TopicButton>
    </View>

<ScrollView>

    <View style={styles.container}>
    <Text allowFontScaling={true}> {'\n'} </Text>
    <Text allowFontScaling={true} style={CoreStyle.title}> {txt} Quiz Completed </Text>
    <Text allowFontScaling={true}> {'\n'} </Text>
    <Text allowFontScaling={true} style={CoreStyle.subtitle}> Congratulations! </Text>
    <Text allowFontScaling={true}> {'\n'} </Text>
    <Text allowFontScaling={true} style={CoreStyle.subtitle2}> You answered {score} out of {total} questions correctly </Text>
    <Image source={basket} style={styles.image}></Image>
    </View>

</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({

    title: { 
        fontSize: 40,
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
        flex: 10,
        color: "#cd22e0",
    },
    subtitle: { 
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#de1258",
    },
    subtitle2: { 
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#d49306",
    },

    container: {
        alignItems: "center",
        marginHorizontal: 20,
    },
});