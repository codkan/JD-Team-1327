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


export default function Traffic({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleTrafficSourcesNav = () => {
        navigation.navigate("TrafficSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <InfoButton1
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></InfoButton1>

    <ScrollView>

    <Text style={styles.title}> Car Safety </Text>
    <Text style={styles.subtitle}> Why is Car Safety So Important? </Text>

    <Text style={styles.content}>
        {'\t'} Driving a car can already be a scary task for some people; you are manuevering a thousand-pound
        hunk of metal and responsible for the lives of drivers and passengers around you. Now you are adding the
        life of your child. Car safety, however, is there to ensure that you and your child stay as safe as possible 
        and hopefully give for a less daunting experience. The following tips outline basic car seat rules, 
        tips for parents on how to be good car safety role models, and things to avoid. {'\n'}
    </Text>

    <Text style={styles.subtitle}> Types of Car Seats </Text>

    <Text style={styles.bullet}>1. Rear-facing carseats</Text>
        <Text style={styles.subbullet}>- Used for infants and toddlers {'\n'}
        - All infants and toddlers should ride in these until they reach the highest weight or height limit of the seat {'\n'}
        - Most convertible rear-facing seats are built to allow children to ride rear-facing for 2 years or more {'\n'}
        - Usually comes with a base that stays in the car in place. The seat clicks into and out of the base for easy installation {'\n'}
        - Has a carrying handle for easy child-carry
        - Ensure that the harness is snug and the chest clip is placed at the center of the chest, even with the armpits {'\n'}
        - Never place a rear-facing carseat in the front seat where a passenger airbag is activated {'\n'}
        - Make sure the seat is angled correctly so that the head and neck are supported and not able to flop around {'\n'}
        - Should only be used for travel; never use for sleeping, feeding, etc outside of the vehicle {'\n'}
    </Text>

    <Text style={styles.bullet}>2. Forward-facing carseats </Text>
        <Text style={styles.subbullet}>- Used for toddlers and preschoolers. This is the next seat up from a rear-facing carseat {'\n'}
        - Should always be worn with the attached harness for proper effectiveness {'\n'}
        - Many forward-facing carseats can accommodate children up to 65 pounds or more {'\n'}
        - All toddlers and preschoolers should ride in a forward-facing carseat until they outgrow the weight or height limit of the seat {'\n'}
        - Does not come with a carrying handle. These seats are intended to stay in the car at all times {'\n'}
        - Should only be used for travel; never use for sleeping, feeding, etc outside of the vehicle {'\n'}
    </Text>

    <Text style={styles.bullet}>3. Booster seat </Text>
        <Text style={styles.subbullet}>- Used for school-aged children {'\n'}
        - Children within this category should use a booster seat with the seat belt until the seat belt fits properly without the need of the booster seat {'\n'}
        - Vehicle seat belts usually fit properly without a booster seat when the child has reached 4ft 9in and is between the ages of 8 to 12 {'\n'}
        - All children under the age of 13 should ride in the back seat regardless of height or weight {'\n'}
    </Text>

    <Text style={styles.bullet}>4. Seat belts </Text>
        <Text style={styles.subbullet}>- Once a seat belt fits properly without the use of a booster seat, children should wear both the lap and shoulder belt at all times {'\n'}
        - Fits correctly when the should belt lies across the middle of the chest and shoulder, not the neck or throat {'\n'}
        - Fits correctly when the lap belt is low and snug across the upper thighs, not the belly {'\n'}
        - Never allow anyone to share seat belts. All passengers must have their own car safety seats or seat belts {'\n'}
    </Text>

    <Text style={styles.subtitle}> Must-Dos while traveling </Text>

    <Text style={styles.bullet}>1. Be a good role model </Text>
        <Text style={styles.subbullet}>- Make sure you always wear your seat belt. This will 
        help your child form a lifelong habit of buckling up. {'\n'}
    </Text>

    <Text style={styles.bullet}>2. Make sure that everyone who transports your child uses the 
    correct car safety seat or seat belt on every trip, every time </Text>
        <Text style={styles.subbullet}>- Being consistent with car safety seat use is good parenting, 
        reduces fussing and complaints, and is safest for your child {'\n'}
    </Text>

    <Text style={styles.bullet}>3. Never leave your child alone in or around cars, and lock your 
    vehicle when it is not in use </Text>
        <Text style={styles.subbullet}>- A child can die of heatstroke because temperatures can reach 
        deadly levels in minutes {'\n'}
        - A child can be strangled by power windows, retracting seat belts, sunroofs, or accessories {'\n'}
        - A child can knock the vehicle into gear, setting it into motion {'\n'}
        - A child can be backed over when the vehicle backs up {'\n'}
        - A child can be trapped in the trunk of the vehicle {'\n'}
    </Text>

    <Text style={styles.bullet}>4. Follow manufacturer directions for cleaning car seats </Text>
        <Text style={styles.subbullet}>- Cleaning but not disinfecting is usually permitted. That's 
        because disinfectant products may decrease the protection provided by the seat and harness {'\n'}
    </Text>

    <Text style={styles.subtitle}> Things to avoid when shopping for carseats </Text>
        <Text style={styles.content}>
        {'\t'} Never use a carseat that is too old. The manufacturer will make a note of how long the 
        carseat can be used and when it was made. If a carseat has any visible cracks on it, it is unuseable 
        and can cause more harm than good to your child. Carseats should also be replaced after any moderate or severe crash. 
        Even minor crashes can cause unseen damage to the carseat and may need replacing. Carseats can also be recalled; 
        make sure that you hold on to the manufacturer label for the carseat so that you know the age of the seat and if
        it has been recalled. If in doubt, you can call the manufacturer or contact the National Highway Traffic Safety 
        Administration (NHTSA) Vehicle Safety Hotline at (888)-327-4236 or their website. {'\n'}
    </Text>

    <Text style={styles.content}> {'\n'} </Text>

    </ScrollView>


    <InfoButton2
        text=">"
        txtColor={"black"}
        onPress={handleTrafficSourcesNav}
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
    bullet: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5
    },
    subbullet: {
        fontSize: 16,
        marginLeft: 30,
        marginRight: 10,
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
