import React, {Component} from "react";
import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import WordArt from "react-wordart";
import basket from "../assets/gift_basket.png";

export default function Win({navigation}){

    const goToFalls = () => {
        navigation.navigate("Info");
    };
    const backToReview = () => {
        navigation.navigate("Review");
    };

    const score = navigation.getParam('score');
    const total = navigation.getParam('total');
    const txt = navigation.getParam('text');

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MediaButton
              text="Back to Review"
              onPress={backToReview}
              txtColor={"black"}
        ></MediaButton>
        <MediaButton
            text="Go to Info"
            txtColor={"black"}
            onPress={goToFalls}
        ></MediaButton>
    </View>

<ScrollView>

    <View style={styles.container}>
    <Text> {'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </Text>
    <Text style={styles.title}> {txt} Quiz Completed </Text>
    <Text> {'\n'} </Text>
    <Text style={styles.subtitle}> Congratulations! </Text>
    <Text> {'\n'} </Text>
    <Text style={styles.subtitle2}> You answered {score} out of {total} questions correctly </Text>
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
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
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    container: {
        alignItems: "center",
        marginHorizontal: 20,
    },
});