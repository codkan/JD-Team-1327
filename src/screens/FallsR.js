import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

global.count = 0;
global.Qs = [
    {Q: {
        q: "Where are infants most likely to fall?",
        a1: "Stroller",
        a2: "Windows",
        a3: "Playground",
        a4: "Furniture / Stairs",
    }},
    {Q: {
        q: "Where can you place a child when secured in a carrier?",
        a1: "Counter",
        a2: "Table",
        a3: "Furniture",
        a4: "Floor",
    }},
    {Q: {
        q: "Where should safety gates be placed on stairs?",
        a1: "Top",
        a2: "Bottom",
        a3: "Neither",
        a4: "Both",
    }}
];

export default class FallsR extends Component{
    constructor(){
        super();
        global.count = 0;
        global.Qs = global.Qs.sort(() => Math.random() - 0.5);
        question = global.Qs[global.count].Q;
        console.log(global.count);
        this.state = {
            prevState: {
                qNum: "Question " + (global.count+1),
                Q: question.q,
                a1: question.a1,
                a2: question.a2,
                a3: question.a3,
                a4: question.a4,
            },
            qNum: "Question " + (global.count+1),
            Q: question.q,
            a1: question.a1,
            a2: question.a2,
            a3: question.a3,
            a4: question.a4,
        };
    };

    reRender = () => {
        //console.log("reRender reached");
        if (global.count < global.Qs.length-1) {
            global.count++;
            question = global.Qs[global.count].Q;
            console.log(global.count);
            this.setState({
                prevState: {
                    qNum: this.state.qNum,
                    Q: this.state.Q,
                    a1: this.state.a1,
                    a2: this.state.a2,
                    a3: this.state.a3,
                    a4: this.state.a4,
                },
                qNum: "Question " + (global.count+1),
                Q: question.q,
                a1: question.a1,
                a2: question.a2,
                a3: question.a3,
                a4: question.a4,
            });
            this.correct.setState({buttonColor: "white"});
            this.inc1.setState({buttonColor: "white"});
            this.inc2.setState({buttonColor: "white"});
            this.inc3.setState({buttonColor: "white"});
        } else {
            this.props.navigation.navigate("FallW");
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        global.count--;
        question = global.Qs[global.count].Q;
        console.log(global.count);
        if (global.count > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: global.Qs[global.count-1].Q.q,
                     a1: global.Qs[global.count-1].Q.q,
                     a2: global.Qs[global.count-1].Q.q,
                     a3: global.Qs[global.count-1].Q.q,
                     a4: global.Qs[global.count-1].Q.q,
                 },
                qNum: "Question " + (global.count+1),
                Q: question.q,
                a1: question.a1,
                a2: question.a2,
                a3: question.a3,
                a4: question.a4,
            });
        } else {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: global.Qs[0].Q.q,
                     a1: global.Qs[0].Q.q,
                     a2: global.Qs[0].Q.q,
                     a3: global.Qs[0].Q.q,
                     a4: global.Qs[0].Q.q,
                 },
                qNum: "Question " + (global.count+1),
                Q: question.q,
                a1: question.a1,
                a2: question.a2,
                a3: question.a3,
                a4: question.a4,
            });
        }
      //Do we want to reset the buttons on going back? Or find a way to preserve answers?
      this.correct.setState({buttonColor: "white"});
        this.inc1.setState({buttonColor: "white"});
        this.inc2.setState({buttonColor: "white"});
        this.inc3.setState({buttonColor: "white"});
    }

  render(){
  return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton onPress={this.deRender}
              text="<"
              txtColor={"black"}
        ></BackButton>
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
      id="inc0"
      text={this.state.a1}
      ref = {ref => this.correct = ref}
    ></QuizButton>
    <QuizButton
      id="inc1"
      text={this.state.a2}
      ref = {ref => this.inc1 = ref}
    ></QuizButton>
    <QuizButton
      id="inc2"
      text={this.state.a3}
      ref = {ref => this.inc2 = ref}
    ></QuizButton>
    <QuizButton
      id="correct"
      title="correct"
      text={this.state.a4}
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