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

export default function Poisonings({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleGoToPoisoningSource = () => {
        navigation.navigate("PoisoningSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <InfoButton1
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></InfoButton1>

    <Text style={styles.title}> Poisonings </Text>
    
    <ScrollView style = {styles.ScrollView}>
    <Text style={styles.subtitle}> Statistics </Text>
    <Text style={styles.content}>
    {'\t'} In 2020 and 2021, there have been over 385,000 cases of child poisonings for children aged 6 and below, 
    with over 250,000 of these being for children aged 2 and under [1]. Children 6 and under are disproportionately at risk for poisonings, 
    as statistics from Poison Control show that the next age group with the most cases were adults between 20 and 29 with over 71,000 cases, 
    almost 5 times less than the children. Specifically, 85% of all cases were caused by poison being ingested through the mouth, and the main culprits for these cases
    among small children were cosmetics and cleaning substances.{'\n'}
    
     {'\n'}
     <Text style={styles.subtitle}> Practices </Text> {'\n'} {'\n'}
    {'\t'} Findings show that doing seemingly small things, such as ensuring that medicines are stored out of reach or putting them away immediately after use,
    could reduce the amount of poisonings per year between 11% and 20% [2]. Overall, the majority of practices to prevent poisonings come down to caretakers having more
    awareness and being more attentive since poisonings due to other sources are very low. Some examples of common practices that could help prevent a child from mistakenly
    poisoning themselves include [3]:
    {'\n'}
    {'\n'}
    - Keep medicines in their original containers {'\n'}
    -  Memorize the poison help number (1-800-222-1222){'\n'}
    - Keep medicines and other dangerous substances at a height above a child's eye level {'\n'}
    - Put away all potential hazardous materials right after use to ensure a child doesn't have time to take themselves {'\n'}
    - Secure child safety locks on things such as medicines {'\n'}
    - Ensure that you have functioning carbon monoxide and smoke detectors {'\n'}
    - Make sure all natural gas based appliances are functioning correctly {'\n'} {'\n'}

    <Text style={styles.subtitle}> Further Readings </Text> {'\n'} {'\n'}
    Read some more tips on how to prevent child poisoning at these links: {'\n'} {'\n'}
    https://kidshealth.org/en/parents/safety-poisoning.html {'\n'} {'\n'}
    https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx {'\n'} {'\n'}
    https://poisonhelp.hrsa.gov/what-you-can-do/prevention-tips {'\n'}


    </Text>

    <MainButton
          text="Sources"
          onPress={handleGoToPoisoningSource}
          txtColor={"black"}
    ></MainButton> 
    <Text style={styles.content}> {'\n'}  {'\n'} </Text>

    </ScrollView>


    <InfoButton2
        text=">"
        txtColor={"black"}
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