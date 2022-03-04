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
    const goToPoisonings = () => {
        navigation.navigate("Poisonings");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }
    const handleLastNav = () => {
        navigation.navigate("BurningSources");
    };
    const handleNextNav = () => {
        navigation.navigate("DrowningSources");
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

    <Text style={CoreStyle.title}> Poisoning Sources: </Text>
    <Text> {'\n'} </Text>

<View style={styles.container}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.poison.org/poison-statistics-national')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] National Poison Statistics </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://injuryprevention.bmj.com/content/injuryprev/23/2/93.full.pdf')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [2] BMJ Injury Prevention </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/homeandrecreationalsafety/poisoning/preventiontips.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [3] Center for Disease Control </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/safety-poisoning.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Kids Health Poisoning Safety </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Healthy Children Poison Prevention </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://poisonhelp.hrsa.gov/what-you-can-do/prevention-tips')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Poison Help Prevention Tips </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <MainButton
          text="Go to Poisonings"
          onPress={goToPoisonings}
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