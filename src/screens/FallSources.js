import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

export default function FallSources({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToFalls = () => {
        navigation.navigate("Falls");
    };
    const backToSources = () => {
        navigation.navigate("Sources");
    };
    const handleNextNav = () => {
        navigation.navigate("BurningSources");
    };

    return (
    <ImageBackground source={Background} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={backToSources}
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

    <Text style={CoreStyle.title}> Fall Sources: </Text>

    <View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=accident-statistics-90-P02853#:~:text=Injury%20is%20the%20leading%20cause,of%20nonfatal%20injury%20for%20children')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] Stanford Children Accident Statistics </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=falls--injury-statistics-and-incidence-rates-90-P02974')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [2] Stanford Children Incidence Rates </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/safechild/images/cdc-childhoodinjury.pdf')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [3] Center for Disease Control </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.safekids.org/tip/falls-prevention-tips')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [4] SafeKids Fall Prevention Tips </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.safekids.org/tv')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [5] SafeKids - Tip-Overs </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.safekids.org/playgroundsafety')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [6] SafeKids - Playground Safety </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/products-strollers.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [7] KidsHealth - Stroller Safety </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

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