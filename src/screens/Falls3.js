import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import InfoButton1 from "../components/InfoButton1";
import InfoButton2 from "../components/InfoButton2";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function Falls3({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleFalls2Nav = () => {
        navigation.navigate("Falls2");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <InfoButton1
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></InfoButton1>

    <Text style={styles.title}> Falls </Text>
    <Text style={styles.subtitle}> Introduction </Text>

    <Text style={styles.content}>
    {'\t'} Falls are the leading cause of hospitalized injury in the U.S. for children ages 0 to 14.
     In 2012, nearly 34,000 children ages 0 to 14 were hospitalized for unintentional falls [1].
     According to the CDC, falls are the leading cause of Traumatic Brain Injury (TBI) for children
     ages 0 to 4. {'\n'} {'\n'}
    {'\t'} Falls were the leading cause of non-fatal injury for all children under 15 with over 50%
     of nonfatal injuries to infants under one being attributed to falls [2]
    </Text>

    <Text style={styles.page}> Page 1 of 3</Text>

    <InfoButton2
        text=">"
        txtColor={"black"}
        onPress={handleFalls2Nav}
    ></InfoButton2>

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
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 15,
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
        marginLeft: 15,
        marginRight: 15,
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
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