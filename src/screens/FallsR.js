import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
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
            a4: "Stroller"
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
            a4: "Counter"
        });
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
    </View>

    <Text style={styles.title}> {this.state.qNum} </Text>
    <Text> {'\n'} </Text>
    <Text style={styles.subtitle}> {this.state.Q} </Text>

    <View style={styles.buttonContainer}>
    <QuizButton reRender={this.reRender}
      title="correct"
      text={this.state.a1}
    ></QuizButton>
    <QuizButton
      text={this.state.a2}
    ></QuizButton>
    <QuizButton
      text={this.state.a3}
    ></QuizButton>
    <QuizButton
      text={this.state.a4}
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