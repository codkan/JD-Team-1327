import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/bg.png";
import tv from "../assets/fallsM/tv_infographic.jpg";
import win from "../assets/fallsM/window_infographic.jpg";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";

export default function FallsM0({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const goToFalls = () => {
        navigation.navigate("Falls");
    }
    const handleNextNav = () => {
        navigation.navigate("BurnsMM");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
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
    <Text style={CoreStyle.title}> Falls </Text>
    <Image style={styles.img} source={win}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
    </Text>
</View>

    <VideoPlayer videoID = "i8oifZ7HXaA"/>

<View style={CoreStyle.mediaContainer}>
    <Image style={styles.img} source={tv}/>
    <Text>
            {'\n'}{'\n'}{'\n'}
    </Text>
</View>

    <VideoPlayer videoID = "XyCHsr9NKqY"/>

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Falls"
          onPress={goToFalls}
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
    back: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: "rgba(196,196,196,1)",
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset : { width: 0, height: 4},
        elevation: 7.5,
        position: "absolute",
    },
    img: {
        height: 500,
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
    }
});