import React from "react";
import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import silent from "../assets/Drowning_Infographic.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function DrowningMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToDrowning = () => {
        navigation.navigate("Drownings");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const handleLastNav = () => {
        navigation.navigate("PoisoningsMM");
    }
    const handleNextNav = () => {
        navigation.navigate("CarSafetyMM");
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

    <Text style={CoreStyle.title}> Drownings </Text>

<View style={CoreStyle.mediaContainer}>

    <Image style={styles.img} source={silent}/>

    <TouchableOpacity onPress={() => Linking.openURL('http://spotthedrowningchild.com/')}>
         <Text style={styles.link}> See just how hard it can be to see a drowning child </Text>
    </TouchableOpacity>

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Drowning"
          onPress={goToDrowning}
          txtColor={"black"}
    ></MainButton>

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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    img: {
        height: 650,
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
        marginBottom: 25,
        fontSize: 25,
        textAlign: "center",
    }
});