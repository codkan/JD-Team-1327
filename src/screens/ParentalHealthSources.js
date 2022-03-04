import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";

export default function ParentalHealth({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToParentalHealth = () => {
        navigation.navigate("ParentalHealth");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }
    const handleLastNav = () => {
        navigation.navigate("DrowningSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={styles.btns}>
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
    </View>

<ScrollView>

    <Text style={styles.title}> Parental Health Sources: </Text>
    <Text> {'\n'} </Text>

<View style={styles.container}>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/ppd.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] Parental Health </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [2] Parental Health </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <MainButton
          text="Go to Parental Health"
          onPress={goToParentalHealth}
          txtColor={"black"}
    ></MainButton>
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
    btns: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 15,
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
});
