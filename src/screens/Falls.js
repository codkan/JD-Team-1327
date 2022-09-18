import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Background from "../assets/bg.png";
import end from "../assets/end.png";
import falls from "../assets/falls.png";
import secure from "../assets/secure.png";
import stairs from "../assets/stairs.png";
import stroller1 from "../assets/stroller1.png";
import stroller2 from "../assets/stroller2.png";
import tv from "../assets/TV.png";
import window from "../assets/window.png";
import playground from "../assets/playground.png";
import fall1 from "../assets/fall1.png";
import fall2 from "../assets/fall2.png"
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import * as Speech from "expo-speech";
import { FallText } from "../FallText";

var i = 0;

export default function Falls({ navigation }) {

    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleFallSourcesNav = () => {
        navigation.navigate("FallSources");
    };
    const handleFallsMMNav = () => {
        navigation.navigate("FallsMM");
    };
    const handleNextNav = () => {
        navigation.navigate("Burns");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    async function speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            Speech.speak("Falls" + ". " +  "5 Steps to Prevent Falls" + ". ", {rate: 0.85});
            for (let i = 0; i < FallText.length; i++) {
                Speech.speak(FallText[i].title + ". " + FallText[i].body, {rate: 0.85});
            }
        } else {
            Speech.stop();
        }
    }

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(FallText[text].title + "." + FallText[text].body, {rate: 0.85});
        } else {
            Speech.stop();
        }
    }

    return (
    <ImageBackground source={Background} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={backToInfo}
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

    <Text style={CoreStyle.title}> Falls </Text>

    <TouchableOpacity onPress={() => speakAll()}>
        <Image style={CoreStyle.headimg} source={falls}/>
    </TouchableOpacity>

<Text style={CoreStyle.subtitle}> 5 Steps to Prevent Falls </Text>

<CollapsibleBox header={FallText[0].title} headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(0)}>
        <Image style={styles.roundpic} source={secure}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>{FallText[0].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={FallText[1].title} headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(1)}>
        <Image style={styles.roundpic} source={stairs}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>{FallText[1].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={FallText[2].title} headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(2)}>
        <Image style={styles.roundpic} source={window}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>{FallText[2].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={FallText[3].title} headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(3)}>
        <Image style={styles.roundpic} source={tv}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>{FallText[3].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={FallText[4].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(4)}>
        <Image style={styles.playpic} source={playground}/>
    </TouchableOpacity>
    <Text style={CoreStyle.subbullet}>{FallText[4].body}</Text>
</CollapsibleBox>

    <Text style={CoreStyle.subtitle}>{FallText[5].title}</Text>
    <TouchableOpacity onPress={() => speak(5)}>
        <Image style={styles.fallpic1} source={fall1}/>
    </TouchableOpacity>
        <Text style={CoreStyle.content}>{FallText[5].body}</Text>

    <Text style={CoreStyle.subtitle}>{FallText[6].title}</Text>
    <TouchableOpacity onPress={() => speak(6)}>
        <Image style={styles.fallpic2} source={fall2}/>
    </TouchableOpacity>
        <Text style={CoreStyle.content}>{FallText[6].body}</Text>

<Image style={styles.longpic} source={end}/>

<Text style={CoreStyle.subtitle}>{FallText[7].title}</Text>

    <TouchableOpacity onPress={() => speak(7)}>
         <Image style={styles.roundpic} source={stroller2}/>
    </TouchableOpacity>

    <Text style={CoreStyle.content}>{FallText[7].body}</Text>

<Text style={CoreStyle.subtitle}>{FallText[8].title}</Text>

    <TouchableOpacity onPress={() => speak(8)}>
         <Image style={styles.roundpic} source={stroller1}/>
    </TouchableOpacity>

<Text style={CoreStyle.content}>{FallText[8].body}</Text>

    <View style={CoreStyle.buttons}>

    <SourcesButton
        onPress={handleFallSourcesNav}
    ></SourcesButton>

    <MMButton
        onPress={handleFallsMMNav}
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
    roundpic: {
        height: 150,
        width: 150,
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 5,
    },
    longpic:{
        width: null,
        resizeMode: "contain",
        height: 45,
        marginBottom: 20,
    },
    playpic: {
        height: 150,
        width: 200,
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 5,
    },
    fallpic1: {
        height: 150,
        width: 130,
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 5,
    },
    fallpic2: {
        height: 150,
        width: 160,
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 5,
    },
});