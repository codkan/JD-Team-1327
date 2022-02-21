import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking, Image, Platform } from "react-native";
import {WebView} from "react-native-webview";
import MediaButton from "../components/MediaButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import BMM1 from "../assets/BurnsMM/bmm1.jpeg";
import BMM2 from "../assets/BurnsMM/bmm2.png"
import BMM3 from "../assets/BurnsMM/bmm3.jpeg"
import BMM4 from "../assets/BurnsMM/bmm4.png"
import { ScrollView } from "react-native-gesture-handler";
import VideoPlayer from "../components/VideoPlayer";

export default function BurnsMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToBurns = () => {
        navigation.navigate("Burns");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const goToPoison = () => {
        navigation.navigate("PoisoningsMM");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>
    
    <ScrollView> 

    <View style={styles.container}>
        <Text>
        {'\n'}{'\n'}{'\n'}        {'\n'}{'\n'}{'\n'}
        </Text>


    <Text style={styles.title}> Burns </Text>
    <Image style={styles.newimg1} source={BMM1}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    <Image style={styles.newimg2} source={BMM2}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    <Image style={styles.newimg3} source={BMM3}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    <Image style={styles.newimg4} source={BMM4}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    </View>



    <VideoPlayer videoID = "IZP_9VIgcnw"/>
    <VideoPlayer videoID = "ZNWjfe-84Ig"/>
    <VideoPlayer videoID = "gMalF0GMLEM"/>
    
    
    <View style={styles.container}>
    <View style={styles.buttons}>

    <MediaButton
          text="Back to Media"
          onPress={backToMedia}
          txtColor={"black"}
    ></MediaButton>

    <MediaButton
          text="Go to Burns"
          onPress={goToBurns}
          txtColor={"black"}
    ></MediaButton>

    <MediaButton
          text="Next Topic"
          onPress={goToPoison}
          txtColor={"black"}
    ></MediaButton>

    </View>
    </View>

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
    img: {
        height: 500,
        width: 350,
    },
    newimg1: {
        height: 525,
        width: 350,
    },
    newimg2: {
        height: 1300,
        width: 350,
    },
    newimg3: {
        height: 450,
        width: 350,
    },
    newimg4: {
        height: 800,
        width: 350,
    },

    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 10,
        marginTop: -50,
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
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    container: {
        alignItems: "center",
    },
    buttons: {
        width: 100,
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 75,
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});