import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";

export default function FallsR({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
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

    <View style={styles.btns}>
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

    <Text style={styles.title}> Question 1 </Text>
    <Text> {'\n'} </Text>
    <Text style={styles.subtitle}> Where are infants most likely to fall? </Text>

    <View style={styles.buttonContainer}>
    <QuizButton
      title="correct"
      text="Furniture / Stairs"
    ></QuizButton>
    <QuizButton
      text="Windows"
    ></QuizButton>
    <QuizButton
      text="Playground"
    ></QuizButton>
    <QuizButton
      text="Stroller"
    ></QuizButton>
    </View>

    <View style={styles.container}>
    <MainButton
        text="Go to Falls"
        onPress={goToInfo}
    ></MainButton>
    </View>

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
    marginTop: 0,
    //marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline"
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
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