import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import SourcesButton from "../components/SourcesButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import { ScrollView } from "react-native";


export default function Drownings({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleDrowningSourcesNav = () => {
        navigation.navigate("DrowningSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <BackButton
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></BackButton>

    <ScrollView>

    <Text style={styles.title}> Drownings </Text>
    <Text style={styles.subtitle}> Why are drownings important? </Text>

    <Text style={styles.content}>
    {'\t'} Almost 800 children in the United States drown each year [2], making it the leading cause 
    of accidental death among children ages 1-4 and the second leading cause among children 1-14. 
    [1] Even nonfatal drownings are a serious problem, with 40% of nonfatal drownings requiring 
    further care or hospitalization, compared to just 8% baseline of nonfatal accidental injuries. 
    [1] Nonfatal drownings may also lead to brain damage and/or long-term disability. {'\n'}
    </Text>

    <Text style={styles.subtitle}> Where do drownings occur? </Text>

    <Text style={styles.content}>
    {'\t'} Drownings can often occur right at home, especially with small children. The most common 
    place for children 1-4 to drown is a home swimming pool. The most common place for children under
     1 to drown in the bathtub. [1] For older children, the most common locations are natural bodies 
     of water like lakes and rivers. [1] {'\n'}
    </Text>

    <Text style={styles.subtitle}> 5 steps to prevent drownings </Text>

<Text style={styles.bullet}>1. Never leave an infant alone in the tub, even just for a few seconds</Text>
    <Text style={styles.subbullet}>-The most likely place for infants to drown is right at home, in the tub. 
    Infants may not be able to lift their heads above water, even if there is only a few inches of water.{'\n'}
    - Toddlers may stand up and then slip and fall, landing facedown. {'\n'}
    - Children may accidentally turn on the hot water, scalding themselves. {'\n'}
</Text>

<Text style={styles.bullet}>2. Young children should ALWAYS wear flotation devices around water
</Text>
    <Text style={styles.subbullet}>-Despite parents’ best efforts, they may still get distracted briefly. 
    A floatation device may avert disaster.{'\n'}
    -If a child falls into muddy, natural water they may be extremely hard to find under the surface 
    without a floatation device.{'\n'}
</Text>

<Text style={styles.bullet}>3. Get CPR Certified
</Text>
    <Text style={styles.subbullet}>-CPR can turn fatal drownings into nonfatal drownings. {'\n'}
    -It is a very good idea for anyone who is caring for a small child to be CPR certified.{'\n'}
    -More information about learning CPR and getting certified is provided by the Red Cross:
    https://www.redcross.org/take-a-class/cpr/cpr-training.{'\n'}
</Text>

<Text style={styles.bullet}>4. Never let your child swim alone or unsupervised
</Text>
    <Text style={styles.subbullet}>-Always keep a close eye on your child when they are in or near water. {'\n'}
    -This includes pools with lifeguards, a lifeguard does not replace your responsibility to supervise your child{'\n'}
</Text>

<Text style={styles.bullet}>5. Teach your child to swim
</Text>
    <Text style={styles.subbullet}>- Swimming lessons can greatly reduce your child’s risk but do not replace 
    the need to follow the other advice listed. Children who know how to swim can and do still drown. {'\n'}
    -Another important step can be to teach your child the 5 water survival skills according to SafeKids:{'\n'}
    1: Jump into deep water, return to the surface. 2: Be able to float/tread water for 1 minute. 
    3: Rotate 360 degrees and locate an exit from the pool. 4: Be able to swim 25 yards (to an exit). 
    5: Exit a pool without the use of a ladder  {'\n'}
</Text>

<Text style={styles.subtitle}> More Info </Text>
<Text style={styles.content}>
    {'\t'} Drowning is often silent. Drowning most often does not look like what we expect, 
    making it much harder to spot, especially in a crowded pool. This is why close supervision
     of your own child is so important. Videos like this one [https://www.youtube.com/watch?v=JYQ9AwsTkAw]
      make clear how difficult it can be to spot someone drowning.  {'\n'}
    </Text>
<Text style={styles.content}>
Home Pool Tips:  {'\n'}
- Construct proper 4 sided fencing around your home pool. This should include self-closing and self-latching gates. {'\n'}
- Do not leave toys in the pool area that may entice your kid to enter the area unsupervised. {'\n'}
- Teach your child to never swim alone, only with adult supervision. {'\n'}
- Consider buying and installing a pool alarm.

</Text>

<SourcesButton
    text="[]"
    txtColor={"black"}
    onPress={handleDrowningSourcesNav}
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
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
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