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


export default function Burns({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleBurnSourcesNav = () => {
        navigation.navigate("BurningSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <InfoButton1
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></InfoButton1>

    <ScrollView>

    <Text style={styles.title}> Burns </Text>
    <Text style={styles.subtitle}> Why are Burn Injuries Important? </Text>

    <Text style={styles.content}>
        {'\t'} Many regular household items like outlets, food, and hot water can cause childhood burns.
         Burn injuries can occur from flames or electrical current but the most concerning for children is scald burns from hot water [1]. 
        About 20,000 children under the age of 4 are hospitalized for scald injuries annually [2].  
        Studies show that nearly 75% of these burn injuries are preventable so understanding safety procedures is essential [3]. 
        Infants and younger children are at higher risk of heat and cold injuries as well, since they produce and lose heat faster than adults [4]. 
        Even though burns are the fifth most common cause of accidental death for children, many of the deaths are preventable [4]. 
        Since most burn injuries happen at home, there are a lot of prevention measures that can be taken. {'\n'}
    </Text>

    <Text style={styles.subtitle}> Types of burn injuries? </Text>
        <Text style={styles.content}>
        {'\t'} There are a few different types of burn injuries. 
        The most common are thermal burns which are caused when heat sources drastically raise the temperature of skin and tissue. 
        Electrical burns due to contact with electricity are also relatively common. 
        It’s easy to overlook, but radiation burns from prolonged exposure to the sun can also injure children. 
        It’s also important to be cognizant of friction burns which can occur if children are playing with ropes.
    </Text>

    <Text style={styles.subtitle}> How to prevent burn injuries? </Text>

    <Text style={styles.bullet}>1. Always test the water temperature before washing your child</Text>
        <Text style={styles.subbullet}>- Lower the thermostat on your water heater below 120°F or install anti-scalding devices {'\n'}
        - Switch on the cold water first and turn it off last to avoid having your children exposed to only hot water {'\n'}
        - Turn your child away from the faucet during baths to prevent them from accidentally turning on the hot water {'\n'}
    </Text>

    <Text style={styles.bullet}>2. Make sure electrical outlets have child safety covers and keep a close eye on your child when they are playing with electronics </Text>
        <Text style={styles.subbullet}>- Ensure there isn’t any exposed wiring and hide all extra wires to avoid your child chewing on cords {'\n'}
        - Replace batteries and check for any unusual defects in electronic toys {'\n'}
        - Keep bedside lamps and lightbulbs out of reach {'\n'}
    </Text>

    <Text style={styles.bullet}>3. Always know where your child is when cooking or handling hot food and liquids</Text>
        <Text style={styles.subbullet}>- Keep toys out of the kitchen {'\n'}
        - Never hold your baby while handling drinks like coffee or tea because of the injury risk {'\n'}
    </Text>

    <Text style={styles.bullet}>4. Turn pot handles away from the front of the stove and use the back burners of the stove first. </Text>
        <Text style={styles.subbullet}>- Avoid tablecloths or large placemats. If a child pulls on one, hot drinks or food can fall. {'\n'}
        - Test food temperatures, especially when heated by the microwave, before feeding your child. {'\n'}
    </Text>

    <Text style={styles.bullet}>5. Have smoke detectors spread throughout your home and remember to replace the batteries often </Text>
        <Text style={styles.subbullet}>- Keep a fire extinguisher handy in case of emergencies {'\n'}
        - Never leave rooms with candles, fireplaces, or active stoves unattended {'\n'}
        - Put potentially dangerous devices like irons or lighters in out-of-reach places {'\n'}
    </Text>

    <Text style={styles.bullet}>6. Make sure to apply sunscreen to your child and to reapply it if they’re playing in the water</Text>
        <Text style={styles.subbullet}>- Don’t store your childs stroller or safety seat in direct view of the hot sun {'\n'}
        - Check metal playground equipment before letting your child play on it {'\n'}
        - Encourage your child to wear shoes since it will prevent them from walking barefoot on hot asphalt {'\n'}
    </Text>

    <Text style={styles.bullet}>7. Most importantly, always supervise your child around any open flame </Text>

    <Text style={styles.content}> {'\n'} </Text>

    <Text style={styles.subtitle}> What are Treatment Options? </Text>
        <Text style={styles.content}>
        {'\t'} In the unfortunate case of a burn injury, some treatments may help. 
        It’s crucial to cool the affected area with cold water or a cold compress. 
        Protect the burned area by wrapping it with gauze or cloth while not breaking any blisters. 
        Don’t immediately apply any ointments, oils, or sprays. 
        If you fear the injury is severe enough or covers a large area, call emergency medical services. 
        If an electrical burn occurs, then there may be damage below the skin so seeing a doctor is also necessary [4]. {'\n'}
    </Text>

    <InfoButton2
        text="[]"
        txtColor={"black"}
        onPress={handleBurnSourcesNav}
    ></InfoButton2>

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