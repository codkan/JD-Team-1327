import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Background from "../assets/bg.png";
import ppd2 from "../assets/parentalHealthMM/ppd2.png";
import ppd3 from "../assets/parentalHealthMM/ppd3.png";
import ppd4 from "../assets/parentalHealthMM/ppd4.png";
import ppd5 from "../assets/parentalHealthMM/ppd5.png";
import either from "../assets/parentalHealthMM/either.png";
import mother1 from "../assets/parentalHealthMM/mother1.png";
import mother2 from "../assets/parentalHealthMM/signs.png";
import father from "../assets/parentalHealthMM/malePPD.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import * as Speech from "expo-speech";
import { ParentText } from "../ParentText";

export default function ParentalHealth({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Traffic");
    };
    const handleParentalHealthSourcesNav = () => {
        navigation.navigate("ParentalHealthSources");
    };
    const handleParentsMMNav = () => {
        navigation.navigate("ParentalHealthMM");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    async function speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            Speech.speak("Parental Health" + ". " + "Symptoms of Postpartum Depression for Either Parent" + ". ", {rate: 0.85});
            for (let i = 0; i < ParentText.length; i++) {
                Speech.speak(ParentText[i].title + ". " + ParentText[i].body, {rate: 0.85});
            }
        } else {
            Speech.stop();
        }
    }

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(ParentText[text].title + "." + ParentText[text].body, {rate: 0.85});
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
        <View style={CoreStyle.invisible}/>
    </View>

    <ScrollView>

    <Text style={CoreStyle.title}> Parental Health </Text>

    <TouchableOpacity onPress={() => speakAll()}>
        <Image style={CoreStyle.headimg} source={ppd2}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subtitle}> Symptoms of Postpartum Depression</Text>

        <CollapsibleBox header={ParentText[0].title} headerstyle={CoreStyle.bullet}>
            <TouchableOpacity onPress={() => speak(0)}>
                <Image style={styles.eitherimg} source={either}/>
            </TouchableOpacity>
            <Text style={CoreStyle.subbullet}>{ParentText[0].body}</Text>
        </CollapsibleBox>

        <CollapsibleBox header={ParentText[1].title} headerstyle={CoreStyle.bullet}>
            <TouchableOpacity onPress={() => speak(1)}>
                <Image style={styles.mother1img} source={mother1}/>
            </TouchableOpacity>
            <Text style={CoreStyle.subbullet}>{ParentText[1].body}</Text>
        </CollapsibleBox>

        <CollapsibleBox header={ParentText[2].title} headerstyle={CoreStyle.bullet}>
            <TouchableOpacity onPress={() => speak(2)}>
                <Image style={CoreStyle.headimg} source={mother2}/>
            </TouchableOpacity>
            <Text style={CoreStyle.subbullet}>{ParentText[2].body}</Text>
        </CollapsibleBox>

        <CollapsibleBox header={ParentText[3].title} headerstyle={CoreStyle.bullet}>
            <TouchableOpacity onPress={() => speak(3)}>
                <Image style={styles.fatherimg} source={father}/>
            </TouchableOpacity>
            <Text style={CoreStyle.subbullet}>{ParentText[3].body}</Text>
        </CollapsibleBox>

    <TouchableOpacity onPress={() => speak(4)}>
        <Image style={CoreStyle.headimg} source={ppd3}/>
    </TouchableOpacity>
    <Text style={CoreStyle.subtitle}>{ParentText[4].title}</Text>
        <Text style={CoreStyle.content}>{ParentText[4].body}</Text>

    <TouchableOpacity onPress={() => speak(5)}>
        <Image style={CoreStyle.headimg} source={ppd4}/>
    </TouchableOpacity>
    <Text style={CoreStyle.subtitle}>{ParentText[5].title}</Text>
        <Text style={CoreStyle.content}>{ParentText[5].body}</Text>

    <View style={CoreStyle.buttons}>
    <SourcesButton
        txtColor={global.text}
        onPress={handleParentalHealthSourcesNav}
    ></SourcesButton>
    <MMButton
        onPress={handleParentsMMNav}
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
    footimg: {
        height: 150,
        width: 225,
        alignSelf: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    eitherimg: {
        height: 150,
        width: 183,
        alignSelf: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    mother1img: {
        height: 150,
        width: 220,
        alignSelf: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    fatherimg: {
        height: 150,
        width: 150,
        alignSelf: "center",
        marginBottom: 15,
        marginTop: 15,
    },
});
