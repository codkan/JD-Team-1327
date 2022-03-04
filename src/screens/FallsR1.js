import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

export default function FallsR({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  const lastQ = () => {
    navigation.navigate("FallsR");
  };
  const backToReview = () => {
    navigation.navigate("Review");
  };
  const nextQ = () => {
    navigation.navigate("FallsR1");
  };
  const goToInfo = () => {
    navigation.navigate("Falls");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={lastQ}
        ></BackButton>
        <MediaButton
              text="Back to Review"
              onPress={backToReview}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={nextQ}
        ></BackButton>
    </View>

    <Text style={CoreStyle.title}> Question 2 </Text>
    <Text> {'\n'} </Text>
    <Text style={CoreStyle.subtitle}> Where can you place a child when secured in a carrier? </Text>

    <View style={styles.buttonContainer}>
    <QuizButton
      text="Counter"
    ></QuizButton>
    <QuizButton
      text="Table"
    ></QuizButton>
    <QuizButton
      text="Furniture"
    ></QuizButton>
    <QuizButton
      title="correct"
      text="Floor"
    ></QuizButton>
    </View>

    <View style={styles.container}>
    <MainButton
        text="Go to Falls"
        onPress={goToInfo}
    ></MainButton>
    </View>

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
    
  title: {
    // margin: 100,
    //height: 70,
    fontSize: 40,
    marginTop: 0,
    //marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline"
  },
  
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 75,
  },
});