import React, {Component} from "react";
import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import basket from "../assets/gift_basket.png";

export default function Win({navigation}){

    const goMenu = () => {
        navigation.navigate("Menu", {module: "Quiz"});
    };
    const goInformation = (_topic) => {
        navigation.navigate("Information", {topic: _topic});
    };

    const [text, onChangeText] = React.useState("");

    const score = navigation.getParam('score');
    const total = navigation.getParam('total');
    const txt = navigation.getParam('text');

    const addScore = async (name) => {
        try {
            var keys = await AsyncStorage.getAllKeys();
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] == name) {
                    await AsyncStorage.removeItem(keys[i], (err) => console.log(err));
                }
            }
            await AsyncStorage.setItem(txt + " " + name, score+'');
        } catch (e) {
            console.log(e);
        }
    };

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <TopicButton
              text="Back to Quizzes"
              onPress={() => goMenu()}
              txtColor={global.text}
        ></TopicButton>
        <TopicButton
            text="Go to Topic"
            txtColor={global.text}
            onPress={() => goInformation(txt)}
        ></TopicButton>
    </View>

<ScrollView>

    <View style={styles.container}>

    <Text allowFontScaling={true} style={CoreStyle.title}> {txt} Quiz Completed </Text>
    <Text allowFontScaling={true} style={CoreStyle.subtitle}> Congratulations! </Text>
    <Text allowFontScaling={true} style={CoreStyle.subtitle2}> You answered {score} out of {total} questions correctly </Text>
    <Text allowFontScaling={true}> {'\n'} </Text>
    <Image source={basket} style={styles.image}></Image>
    <Text allowFontScaling={true}> {'\n'} </Text>

    <View style={styles.textbox}>
    <TextInput
        onChangeText={onChangeText}
        value={text}
        width={"90%"}
    />
    <Button title={">"} onPress={() => addScore(text+'')}/>
    </View>
    </View>

</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({

    title: { 
        fontSize: 40,
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
        flex: 10,
        color: "#cd22e0",
    },
    subtitle: { 
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#de1258",
    },
    subtitle2: { 
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#d49306",
    },
    container: {
        alignItems: "center",
        marginHorizontal: 20,
    },
    textbox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    }
});