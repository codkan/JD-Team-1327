import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import Background from "../assets/bg.png";
import drown from "../assets/drown.png";
import drowning from "../assets/drowning.png";
import pool from "../assets/Pool.png";
import hand from "../assets/hand.png";
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
import * as Speech from "expo-speech";
import {DrownText} from "../DrownText";

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

    async function speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            Speech.speak("Drownings" + ". " + "5 Steps to Prevent Drownings" + ". ", {rate: 0.90});
            for (let i = 0; i < DrownText.length; i++) {
                Speech.speak(DrownText[i].title + ". " + DrownText[i].body, {rate: 0.90});
            }
        } else {
            Speech.stop();
        }
    }

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(DrownText[text].title + "." + DrownText[text].body, {rate: 0.90});
        } else {
            Speech.stop();
        }
    }

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Info"
              onPress={backToInfo}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}> Drownings </Text>

    <TouchableOpacity onPress={() => speakAll()}>
        <Image style={CoreStyle.headimg} source={drown}/>
    </TouchableOpacity>

    <Text allowFontScaling={true} style={CoreStyle.subtitle}> 5 steps to prevent drownings </Text>

<CollapsibleBox header={DrownText[0].title} 
    headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(0)}>
        <Image style={styles.bathpic} source={bath}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{DrownText[0].body}</Text>
</CollapsibleBox> 

<CollapsibleBox header={DrownText[1].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(1)}>
        <Image style={styles.floatpic} source={float}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{DrownText[1].body}</Text>
</CollapsibleBox> 

<CollapsibleBox header={DrownText[2].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(2)}>
        <Image style={styles.cprpic} source={cpr}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{DrownText[2].body}</Text>
</CollapsibleBox> 


<CollapsibleBox header={DrownText[3].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(3)}>
        <Image style={styles.alonepic} source={alone}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{DrownText[3].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={DrownText[4].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(4)}>
        <Image style={styles.teachpic} source={teach}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{DrownText[4].body}</Text>
</CollapsibleBox>

<TouchableOpacity onPress={() => speak(5)}>
    <Image style={styles.drowningpic} source={drowning}/>
</TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{DrownText[5].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{DrownText[5].body}</Text>

<TouchableOpacity onPress={() => speak(6)}>
    <Image style={styles.handpic} source={hand}/>
</TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{DrownText[6].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{DrownText[6].body}</Text>

<Text allowFontScaling={true} style={CoreStyle.subtitle}>{DrownText[7].title}</Text>
    <TouchableOpacity onPress={() => speak(7)}>
        <Image style={CoreStyle.headimg} source={pool}/>
    </TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.content}>{DrownText[7].body}</Text>

<View style={CoreStyle.buttons}>
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
    handpic: {
        height: 150,
        width: 150,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    drowningpic: {
        height: 150,
        width: 195,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});