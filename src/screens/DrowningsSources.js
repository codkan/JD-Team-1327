import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function Falls1({ navigation }) {
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
    const backToSources = () => {
        navigation.navigate("Sources");
    }
    const handleLastNav = () => {
        navigation.navigate("PoisoningSources");
    };
    const handleNextNav = () => {
        navigation.navigate("TrafficSources");
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
              text="Back to Sources"
              onPress={backToSources}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>

<ScrollView>

    <Text style={CoreStyle.title}> Drownings Sources: </Text>

<View style={styles.container}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/drowning/facts/index.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] CDC Drownings Page </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.safekids.org/sites/default/files/water-safety-infographic-long-version.pdf')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [2] SafeKids Drowning Safety</Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    
    <MainButton
          text="Go to Drowning"
          onPress={goToDrowning}
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
    
    
    
    
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    container: {
        alignItems: "center",
    },
    
});