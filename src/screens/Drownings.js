import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Background from "../assets/bg.png";
import Pool from "../assets/Pool.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import bath from "../assets/bath.png";
import float from "../assets/float.png";
import cpr from "../assets/cpr.png";
import alone from "../assets/alone.png";
import teach from "../assets/teach.png";
import VideoPlayer from "../components/VideoPlayer";

export default function Drownings({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Poisonings");
    };
    const handleDrowningSourcesNav = () => {
        navigation.navigate("DrowningSources");
    };
    const handleDrowningMMNav = () => {
        navigation.navigate("DrowningMM");
    };
    const handleNextNav = () => {
        navigation.navigate("Traffic");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Info"
              onPress={backToInfo}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text style={CoreStyle.title}> Drownings </Text>

    <Image style={styles.headimg} source={Pool}/>

    <Text style={CoreStyle.subtitle}> 5 steps to prevent drownings </Text>

<CollapsibleBox header="1. Never leave an infant alone in the tub, even just for a few seconds" 
    headerstyle={CoreStyle.bullet}>
    <Image style={styles.bathpic} source={bath}/>
    <Text style={CoreStyle.subbullet}>- The most likely place for infants to drown is right at home, in the tub.
    Infants may not be able to lift their heads above water, even if there is only a few inches of water.{'\n'}
    - Toddlers may stand up and then slip and fall, landing facedown. {'\n'}
    - Children may accidentally turn on the hot water, scalding themselves. {'\n'}</Text>
</CollapsibleBox> 

<CollapsibleBox header="2. Young children should ALWAYS wear flotation devices around water" 
    headerstyle={CoreStyle.bullet}>
    <Image style={styles.floatpic} source={float}/>
    <Text style={CoreStyle.subbullet}>- Despite parents’ best efforts, they may still get distracted briefly.
    A floatation device may avert disaster.{'\n'}
    - If a child falls into muddy, natural water they may be extremely hard to find under the surface
    without a floatation device.{'\n'}</Text>
</CollapsibleBox> 

<CollapsibleBox header="3. Get CPR Certified" 
    headerstyle={CoreStyle.bullet}>
    <Image style={styles.cprpic} source={cpr}/>
    <Text style={CoreStyle.subbullet}>- CPR can turn fatal drownings into nonfatal drownings. {'\n'}
    - It is a very good idea for anyone who is caring for a small child to be CPR certified.{'\n'}
    - More information about learning CPR and getting certified is provided by the Red Cross:
    https://www.redcross.org/take-a-class/cpr/cpr-training.{'\n'}</Text>
</CollapsibleBox> 


<CollapsibleBox header="4. Never let your child swim alone or unsupervised" headerstyle={CoreStyle.bullet}>
    <Image style={styles.alonepic} source={alone}/>
    <Text style={CoreStyle.subbullet}>- Always keep a close eye on your child when they are in or near water. {'\n'}
    - This includes pools with lifeguards, a lifeguard does not replace your responsibility to supervise your child{'\n'}
    </Text>
</CollapsibleBox>

<CollapsibleBox header="5. Teach your child to swim" headerstyle={CoreStyle.bullet}>
<Image style={styles.teachpic} source={teach}/>
<Text style={CoreStyle.subbullet}>- Swimming lessons can greatly reduce your child’s risk but do not replace 
    the need to follow the other advice listed. Children who know how to swim can and do still drown. {'\n'}
    - Another important step can be to teach your child the 5 water survival skills according to SafeKids:{'\n'}
    1: Jump into deep water, return to the surface. 2: Be able to float/tread water for 1 minute. 
    3: Rotate 360 degrees and locate an exit from the pool. 4: Be able to swim 25 yards (to an exit). 
    5: Exit a pool without the use of a ladder  {'\n'}</Text>
</CollapsibleBox>

<Text style={CoreStyle.subtitle}> {'\n'} Why are drownings important? </Text>

    <Text style={CoreStyle.content}>
    {'\t'} Almost 800 children in the United States drown each year [2], making it the leading cause
    of accidental death among children ages 1-4 and the second leading cause among children 1-14.
    [1] Even nonfatal drownings are a serious problem, with 40% of nonfatal drownings requiring
    further care or hospitalization, compared to just 8% baseline of nonfatal accidental injuries.
    [1] Nonfatal drownings may also lead to brain damage and/or long-term disability. {'\n'}
    </Text>

    <Text style={CoreStyle.subtitle}> Where do drownings occur? </Text>

    <Text style={CoreStyle.content}>
    {'\t'} Drownings can often occur right at home, especially with small children. The most common
    place for children 1-4 to drown is a home swimming pool. The most common place for children under
     1 to drown in the bathtub. [1] For older children, the most common locations are natural bodies
     of water like lakes and rivers. [1] {'\n'}
    </Text>

<Text style={CoreStyle.subtitle}> More Drowning Info </Text>
<Text style={CoreStyle.content}>
    {'\t'} Drowning is often silent. Drowning most often does not look like what we expect, 
    making it much harder to spot, especially in a crowded pool. This is why close supervision
     of your own child is so important. Videos like the one below make clear how difficult it can be to spot someone drowning. {'\n'}
    </Text>

    <VideoPlayer videoID = "JYQ9AwsTkAw"/>

<Text style={CoreStyle.content}>
Home Pool Tips:  {'\n'}
- Construct proper 4 sided fencing around your home pool. This should include self-closing and self-latching gates. {'\n'}
- Do not leave toys in the pool area that may entice your kid to enter the area unsupervised. {'\n'}
- Teach your child to never swim alone, only with adult supervision. {'\n'}
- Consider buying and installing a pool alarm.
</Text>

<View style={styles.buttons}>
<SourcesButton
    onPress={handleDrowningSourcesNav}
></SourcesButton>

<MMButton
    onPress={handleDrowningMMNav}
></MMButton>
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
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
    },
    titleImage: {
        height: 65,
        width: 65,
        flex: 1
    },
    titleBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingRight: 20
    },
    headimg: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
    bathpic: {
        height: 200,
        width: 200,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    floatpic: {
        height: 150,
        width: 300,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    cprpic: {
        height: 185,
        width: 205,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    alonepic: {
        height: 150,
        width: 250,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    teachpic: {
        height: 155,
        width: 230,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});