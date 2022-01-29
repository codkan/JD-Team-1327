import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import InfoButton1 from "../components/InfoButton1";
import InfoButton2 from "../components/InfoButton2";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import { ScrollView } from "react-native";

export default function Falls1({ navigation }) {
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

    <ScrollView style = {styles.ScrollView}>

    <Text style={styles.subtitle}> Introduction </Text>
        <Text style={styles.content}>
        {'\t'} Falls are the leading cause of hospitalized injury in the U.S. for children ages 0 to 14.
         In 2012, nearly 34,000 children ages 0 to 14 were hospitalized for unintentional falls [1].
         According to the CDC, falls are the leading cause of Traumatic Brain Injury (TBI) for children
         ages 0 to 4. {'\n'} {'\n'}
        {'\t'} Falls were the leading cause of non-fatal injury for all children under 15 with over 50%
         of nonfatal injuries to infants under one being attributed to falls [2]
    </Text>

    <Text style={styles.subtitle}> Windows </Text>

        <Text style={styles.content}>
        {'\t'} Screens are meant to keep bugs out, not children in. Properly install window guards to
        prevent unintentional window falls. For windows above the first floor, include an emergency
        release device in case of fire. {'\n'} {'\n'}
        {'\t'} Install window stops so that windows open no more than four inches yet adults and older
        children can easily open in case of emergency. Include this in your family’s fire escape plan
        and practice it regularly. {'\n'} {'\n'}
        {'\t'} Keep windows locked and closed when they are not being used. Keep in mind that as kids
        grow, they may have enough strength, dexterity and curiosity to open them. If you have
        windows that can open from both top and bottom, make a habit of opening just the top to prevent
        accidental falls. {'\n'} {'\n'}
        {'\t'} For your crawlers and climbers, move chairs, cribs and other furniture away from windows
        to help prevent window falls. If a fall does ever occur, never move a child who appears to be
        seriously injured — call 911 and let trained medical personnel move the child with proper precautions. {'\n'} {'\n'}
        </Text>

    </ScrollView>

    <InfoButton2
        text=">"
        txtColor={"black"}
        onPress={handleInfoNav}
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
        marginTop: 15,
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