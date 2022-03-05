import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

export default class FallsR extends Component{
    constructor(){
        super();

        this.state = {
            qNum: "Question 1",
            Q: "Where are infants most likely to fall?",
            a1: "Furniture / Stairs",
            a2: "Windows",
            a3: "Playground",
            a4: "Stroller",
            buttonColor: "white"
        };
    };

    reRender = () => {
        console.log("reRender reached");
        this.setState({
            qNum: "Question 2",
            Q: "Where can you place a child when secured in a carrier?",
            a1: "Floor",
            a2: "Table",
            a3: "Furniture",
            a4: "Counter",
            buttonColor: "white"
        });
        this.correct.setState({buttonColor: "white"});
        this.inc1.setState({buttonColor: "white"});
        this.inc2.setState({buttonColor: "white"});
        this.inc3.setState({buttonColor: "white"});
        //this.render();
    };

  render(){
  return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MediaButton
              text="Back to Review"
              onPress={() => this.props.navigation.navigate("Review")}
              txtColor={"black"}
        ></MediaButton>
        <BackButton onPress={this.reRender}
              text=">"
              txtColor={"black"}
        ></BackButton>
    </View>

    <Text style={styles.title}> {this.state.qNum} </Text>
    <Text> {'\n'} </Text>
    <Text style={styles.subtitle}> {this.state.Q} </Text>

    <View style={styles.buttonContainer}>
    <QuizButton
      id="correct"
      title="correct"
      text={this.state.a1}
      backgroundColor={"white"}
      buttonColor={"white"}
      ref = {ref => this.correct = ref}
    ></QuizButton>
    <QuizButton
      id="inc1"
      text={this.state.a2}
      backgroundColor={"white"}
      buttonColor={"white"}
      ref = {ref => this.inc1 = ref}
    ></QuizButton>
    <QuizButton
      id="inc2"
      text={this.state.a3}
      backgroundColor={"white"}
      buttonColor={"white"}
      ref = {ref => this.inc2 = ref}
    ></QuizButton>
    <QuizButton
      id="inc3"
      text={this.state.a4}
      backgroundColor={"white"}
      buttonColor={"white"}
      ref = {ref => this.inc3 = ref}
    ></QuizButton>
    </View>

    <View style={styles.container}>
    <MainButton
        text="Go to Falls"
        onPress={() => this.props.navigation.navigate("Falls")}
    ></MainButton>
    </View>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
  );
  }
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