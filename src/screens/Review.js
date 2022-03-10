import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import MainButton from "../components/MainButton";
import Navbar from "../components/NavBar";

export default function About({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  const reviewFalls = () => {
    navigation.navigate("FallsR");
  };
  const reviewPoison = () => {
    navigation.navigate("PoisonR");
  };
  const reviewDrowning = () => {
    navigation.navigate("DrowningR");
  };

  const reviewCarSafety = () => {
    navigation.navigate("RoadRev1");
  }

  const reviewParentalHealth = () => {
    navigation.navigate("ParRev1");
  }

  return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.modalText}> Review</Text>
    <View style={styles.buttonContainer}>
    <MainButton
      text="Falls"
      txtColor={"black"}
      onPress={reviewFalls}
    ></MainButton>
    <MainButton
      text="Burns"
      txtColor={"black"}
    ></MainButton>
    <MainButton
      text="Poisoning"
      txtColor={"black"}
      onPress={reviewPoison}
    ></MainButton>
    <MainButton
      text="Drowning"
      txtColor={"black"}
      onPress={reviewDrowning}
    ></MainButton>
    <MainButton
      text="Car Safety"
      txtColor={"black"}
      onPress={reviewCarSafety}
    ></MainButton>
    <MainButton
      text="Parental Health"
      txtColor={"black"}
      onPress={reviewParentalHealth}
    ></MainButton>
    </View>
    <Navbar navigation={navigation}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  modalText: {
    // margin: 100,
    height: 70,
    fontSize: 40,
    marginTop: 100,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: 150,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    top: -80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonContainer2: {
    flex: 1,
    top: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    color: "black",
  },
});