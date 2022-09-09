import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/bg.png";
import BMM1 from "../assets/BurnsMM/bmm1.jpeg";
import BMM2 from "../assets/BurnsMM/bmm2.png";
import BMM3 from "../assets/BurnsMM/bmm3.jpeg";
import BMM4 from "../assets/BurnsMM/bmm4.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";

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
    const handleLastNav = () => {
        navigation.navigate("FallsMM");
    }
    const handleNextNav = () => {
        navigation.navigate("PoisoningsMM");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Media"
              onPress={backToMedia}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>
    
    <ScrollView> 

    <View style={CoreStyle.mediaContainer}>
    <Text style={CoreStyle.title}> Burns </Text>
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

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Burns"
          onPress={goToBurns}
          txtColor={"black"}
    ></MainButton>
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
        resizeMode: "cover",
        justifyContent: "center",
    },
    newimg1: {
        height: 600,
        width: "100%",
    },
    newimg2: {
        height: 1500,
        width: "100%",
    },
    newimg3: {
        height: 550,
        width: "100%",
    },
    newimg4: {
        height: 900,
        width: "100%",
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});