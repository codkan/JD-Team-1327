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
    const goToBurns = () => {
        navigation.navigate("Burns");
    };
    const backToSources = () => {
        navigation.navigate("Sources");
    };
    //Navigates to previous module
    const handleLastNav = () => {
        navigation.navigate("FallSources");
    };
    //Navigate to next module
    const handleNextNav = () => {
        navigation.navigate("PoisoningSources");
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

    <Text style={CoreStyle.title}> Burnings Sources: </Text>

<View style={styles.container}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.childrenssafetynetwork.org/child-safety-topics/fire-burn-safety')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] Fire & Burn Safety </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://ameriburn.org/wp-content/uploads/2018/12/nbaw2019_statsdataresources_120618-1.pdf')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [2] Scald Statistics and Data </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=burns-overview-90-P01737')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [3] Overview of Burns </Text>
    </TouchableOpacity>

    <Text style={CoreStyle.title}> Further Readings </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.uofmhealth.org/health-library/ue5140')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Child Safety: Preventing Burns </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/safety-burns.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Household Safety: Preventing Burns, Shocks, and Fires </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://raisingchildren.net.au/newborns/safety/burns-scalds-fire/burns-prevention')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Burns prevention in your home </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>


    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=preventing-burn-injuries-90-P01750')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Preventing Burn Injuries </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/child-safety/art-20044027')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Burn safety: Protect your child from burns </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

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