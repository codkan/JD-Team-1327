import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function FallW({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToFalls = () => {
        navigation.navigate("Falls");
    };
    const backToReview = () => {
        navigation.navigate("Review");
    };
    const handleNextNav = () => {
        navigation.navigate("BurningSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MediaButton
              text="Back to Review"
              onPress={backToReview}
              txtColor={"black"}
        ></MediaButton>
        <MediaButton
            text="Go to Falls"
            txtColor={"black"}
            onPress={goToFalls}
        ></MediaButton>
    </View>

<ScrollView>

    <View style={styles.container}>
    <Text> {'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </Text>
    <Text style={CoreStyle.title}> Fall Quiz Completed! </Text>
    <Text> {'\n'} </Text>
    <Text style={CoreStyle.subtitle}> Congratulations! </Text>
    <Text> {'\n'} </Text>
    <Text style={CoreStyle.subtitle}> You answered _ out of __ questions correctly </Text>
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