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

export default function Falls({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleFallSourcesNav = () => {
        navigation.navigate("FallSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <InfoButton1
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></InfoButton1>

    <ScrollView>

    <Text style={styles.title}> Falls </Text>

    <Text style={styles.subtitle}> Why are falls important? </Text>
        <Text style={styles.content}>
        {'\t'} Falls are the leading cause of hospitalized injury in the U.S. for children ages 0 to 14. [1]
         In fact, over 2 million children ages 14 and under are estimated to receive treatment for fall injuries annually. [2]
         Though these injuries are even more prevalent and severe for younger age groups. According
         to the CDC, falls are the leading cause of Traumatic Brain Injury (TBI) for children
         ages 0 to 4 with over 50% of total nonfatal injuries to infants under one being attributed to falls. [3] {'\n'}
    </Text>

    <Text style={styles.subtitle}> When and where do falls occur? </Text>
        <Text style={styles.content}>
        {'\t'} The different circumstances for falls vary largely between infants and older toddlers
        considering their differing mobility. Infants are most likely to fall from furniture/toys and
        stairs while they are unable to walk, while toddlers and older children are more likely to fall
        on the playground or from windows. [2]
        </Text>


<Text style={styles.subtitle}> 5 Steps to Prevent Falls </Text>

<Text style={styles.bullet}>1. Be mindful with infants, even when secured</Text> //Better title?
    <Text style={styles.subbullet}>- Whenever high chairs, infant carriers, car-seats, swings, or strollers are in use,
    always keep infants and young children strapped in and secure. {'\n'}
    - Even when your child is secured in a carrier, NEVER place it on top of a counter, table, or other
      furniture. Place it on the floor so that the child cannot rock itself off or be pulled/pushed by other siblings. {'\n'}
    - Try to use shopping carts with wheeled carriers attached whenever possible as they protect the child
      and often have fun designs {'\n'}
    - If you are using a normal shopping cart and seat, always use the harnesses or safety belts and avoid
      carts without them {'\n'}
    - Even if you are using a cart with an attached carrier, never leaver your child alone in the cart or
      allow them to ride in, under, or on the cart basket. [4] {'\n'}
</Text>

<Text style={styles.bullet}>2. Prevent dangerous falls for crawlers at home</Text>
    <Text style={styles.subbullet}>- Stairs are one of the most dangerous places for young children, so use
    safety gates approved for both the tops & bottoms of stairs and, if possible, attach them to the wall. {'\n'}
    - Even with safety gates, infants and toddlers should always be closely supervised on or near stairs.{'\n'}
    - Children can easily fall elsewhere around the house, keep hallways, as well as stairs, well-lit and
      free from clutter and use ant-slip rugs for hardwood or tile. {'\n'}
    - Especially consider anti-slip mats and decals in the bathtub and shower to prevent dangerous falls {'\n'}
    - Always supervise young children on high porches, decks, or balconies and avoid them if at all possible. [4] {'\n'}
</Text>

<Text style={styles.bullet}>3. Close, lock, and guard windows from toddlers</Text>
    <Text style={styles.subbullet}>- Keep younger children and climbable furniture away from windows. {'\n'}
    - If your windows open from the top and bottom, open only the top to prevent falls. Though be
      mindful that children may grow strong enough to open the bottom {'\n'}
    - When not in use, never forget to not only close but LOCK windows. {'\n'}
    - Normal screens are not meant ror protection, so install proper window guards that you can easily open
      in the event of an emergency. {'\n'}
    - For extra protection, install window stops that prevent them from opening more than a few inches. [4] {'\n'}
</Text>

<Text style={styles.bullet}>4. Baby-proof furniture & protect climbers from tip-overs</Text>
    <Text style={styles.subbullet}>- Do not let young children climb on any furniture where they could
    fall from any height or the furniture could possibly be tipped over, especially near windows.{'\n'}
    - Rearrange household items so that heavy items are lower and children are not tempted to climb or
    reach higher objects. {'\n'}
    - Securely attach furniture to the walls or floors by using anti-tip brackets, braces, wall straps, or mounts/braces
      and install stops on dresser drawers to prevent them from being pulled out. {'\n'}
    - Larger, older TVs should be placed on stable, low, secured furniture while flat-screen TVs
      should be mounted higher on the wall [5] {'\n'}
</Text>

<Text style={styles.bullet}>5. Pay close attention at the playground with young children </Text>
    <Text style={styles.subbullet}>- Falls are the most common and the most severe playground injuries {'\n'}
    - Nearly half of playground injuries are due to improper supervision, so always avoid distraction and
      actively supervise children rather than letting them loose {'\n'}
    - Always dress appropriately for the playground by avoiding necklaces, purses, drawstrings, or hard
      clothing items that may pose strangulation hazards or worsen impacts {'\n'}
    - Teach and guide children to avoid any pushing, shoving, or crowding {'\n'}
    - If possible, seek out playgrounds with softer, shock-absorbing surfaces like rubber, turf, mulch,
      wood chips, pea gravel, etc. rather than asphalt, concrete, or dirt. [6] {'\n'}

</Text>

<Text style={styles.content}> {'\n'} </Text>

    </ScrollView>

    <InfoButton2
        text="Sources"
        txtColor={"black"}
        onPress={handleFallSourcesNav}
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