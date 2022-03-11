import React, {Component} from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function ParW({navigation}){

    const goToParentalHealth = () => {
        navigation.navigate("ParentalHealth");
    };
    const backToReview = () => {
        navigation.navigate("Review");
    };

    const score = navigation.getParam('score');
    const total = navigation.getParam('total');

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MediaButton
              text="Back to Review"
              onPress={backToReview}
              txtColor={"black"}
        ></MediaButton>
        <MediaButton
            text="Parental Health"
            txtColor={"black"}
            onPress={goToParentalHealth}
        ></MediaButton>
    </View>

<ScrollView>

    <View style={styles.container}>
    <Text> {'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </Text>
    <Text style={CoreStyle.title}> Parental Health Quiz Completed </Text>
    <Text> {'\n'} </Text>
    <Text style={CoreStyle.subtitle}> Congratulations! </Text>
    <Text> {'\n'} </Text>
    <Text style={CoreStyle.subtitle}> You answered {score} out of {total} questions correctly </Text>
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