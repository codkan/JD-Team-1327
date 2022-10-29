import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
            let keys = await AsyncStorage.getAllKeys();
            for (let value of keys) {
                if (value == name) {
                    await AsyncStorage.removeItem(value, (err) => console.log(err));
                }
            }
            await AsyncStorage.setItem(txt + " " + name, score+'');
            Alert.alert(
                "Score Submitted",
                name + ", your score of " + score + " has been submitted to the local leaderboard",
                [
                    {text: 'CLOSE', style: 'cancel'},
                    {text: 'CONTINUE', style: 'default'},
                ],
            );
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
        <Image source={basket} style={CoreStyle.img}></Image>
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
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    }
});