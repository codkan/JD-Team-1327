import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking } from "react-native";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import SourcesButton from "../components/SourcesButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import { ScrollView } from "react-native";

export default function Poisonings({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handlePoisoningSourcesNav = () => {
        navigation.navigate("PoisoningSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <BackButton
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></BackButton>
    
    <ScrollView>

    <Text style={styles.title}> Poisonings </Text>

    <Text style={styles.subtitle}> Statistics </Text>
        <Text style={styles.content}>
        {'\t'} In 2020 and 2021, there have been over 385,000 cases of child poisonings for children aged 6 and below, 
            with over 250,000 of these being for children aged 2 and under. Children 6 and under are disproportionately at risk for poisonings, 
            as statistics from Poison Control show. Most cases (85%) are caused ingesting substances, such as cosmetics and cleaning substances.
        </Text>

    <Text style={styles.subtitle}> Practices </Text>
        <Text style={styles.content}>
        {'\t'} Findings show that doing seemingly small things, such as ensuring that medicines are stored out of reach or putting them away immediately after use,
        could reduce the amount of poisonings per year between 11% and 20%. Overall, the majority of practices to prevent poisonings come down to caretakers having more
        awareness and being more attentive since poisonings due to other sources are very low. Some examples of common practices that could help prevent a child from mistakenly
        poisoning themselves include:
        {'\n'}
        {'\n'}
        - Keep medicines in their original containers {'\n'}
        - Memorize the poison help number (1-800-222-1222){'\n'}
        - Keep medicines and other dangerous substances at a height above child eye level {'\n'}
        - Put away all potential hazardous materials right after use to ensure a child does not have time to take themselves {'\n'}
        - Secure child safety locks on things such as medicines {'\n'}
        - Ensure that you have functioning carbon monoxide and smoke detectors {'\n'}
        - Make sure all natural gas based appliances are functioning correctly {'\n'}
        - Check your home for lead paint that can chip off {'\n'}
        </Text>
    
        <SourcesButton
        text="[]"
        txtColor={"black"}
        onPress={handlePoisoningSourcesNav}
    ></SourcesButton>

        
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
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
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
