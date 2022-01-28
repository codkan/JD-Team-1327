import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import InfoButton1 from "../components/InfoButton1";
import InfoButton2 from "../components/InfoButton2";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function Falls1({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const backToPoison = () => {
        navigation.navigate("Poisoning1");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.title}> Sources: </Text>
    <Text style={styles.content}> {'\n'}
    [1] https://www.poison.org/poison-statistics-national {'\n'}{'\n'}
    [2] https://injuryprevention.bmj.com/content/injuryprev/23/2/93.full.pdf {'\n'}{'\n'}
    [3] https://www.cdc.gov/homeandrecreationalsafety/poisoning/preventiontips.htm {'\n'}{'\n'} {'\n'}{'\n'}
    
    <MainButton
          text="Back to Poisoning"
          onPress={backToPoison}
          txtColor={"black"}
    ></MainButton> 
    
    
    
    </Text>
    

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