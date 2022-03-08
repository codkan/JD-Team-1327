import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

global.count = 0;
global.score = 0;
global.Qs = [
    {Q: {
        q: "Where are infants most likely to fall?",
        answers: [
            {a: "Stroller", id:"inc0"},
            {a: "Windows", id:"inc1"},
            {a: "Playground", id:"inc2"},
            {a: "Furniture / Stairs", id:"correct"},
        ],
    }},
    {Q: {
        q: "Where can you place a child when secured in a carrier?",
        answers: [
            {a: "Counter", id:"inc0"},
            {a: "Table", id:"inc1"},
            {a: "Furniture", id:"inc2"},
            {a: "Floor", id:"correct"},
        ],
    }},
    {Q: {
        q: "Where should safety gates be placed on stairs?",
        answers: [
            {a: "Top", id:"inc0"},
            {a: "Bottom", id:"inc1"},
            {a: "Neither", id:"inc2"},
            {a: "Both", id:"correct"},
        ],
    }},
];

export default class FallsR extends Component{
    constructor(){
        super();
        global.count = 0;
        global.Qs = global.Qs.sort(() => Math.random() - 0.5);
        var question = global.Qs[global.count].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (global.count+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (global.count+1),
            Q: question.q,
            answers: [
                {a: question.answers[0].a, id: question.answers[0].id },
                {a: question.answers[1].a, id: question.answers[1].id },
                {a: question.answers[2].a, id: question.answers[2].id },
                {a: question.answers[3].a, id: question.answers[3].id },
            ],
        };
    };

    reRender = () => {
        //console.log("reRender reached");
        if (this.correct.state.buttonColor == "green") {
            global.score--;
        }
        if (global.count < global.Qs.length-1) {
            global.count++;
            var question = global.Qs[global.count].Q;
            this.setState({
                prevState: {
                    qNum: this.state.qNum,
                    Q: this.state.Q,
                    answers: [
                        {a: this.state.answers[0].a, id: this.state.answers[0].id },
                        {a: this.state.answers[1].a, id: this.state.answers[1].id },
                        {a: this.state.answers[2].a, id: this.state.answers[2].id },
                        {a: this.state.answers[3].a, id: this.state.answers[3].id },
                    ],
                },
                qNum: "Question " + (global.count+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
            this.correct.setState({buttonColor: "white"});
            this.inc0.setState({buttonColor: "white"});
            this.inc1.setState({buttonColor: "white"});
            this.inc2.setState({buttonColor: "white"});
        } else {
            console.log(global.score);
            this.props.navigation.navigate("FallW", {
                score: global.score,
                total: global.Qs.length,
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        global.score--;
        global.count--;
        var question = global.Qs[global.count].Q;
        if (global.count > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: global.Qs[global.count-1].Q.q,
                     answers: [
                         {a: global.Qs[global.count-1].Q.answers[0].a, id: global.Qs[global.count-1].Q.answers[0].id},
                         {a: global.Qs[global.count-1].Q.answers[1].a, id: global.Qs[global.count-1].Q.answers[1].id},
                         {a: global.Qs[global.count-1].Q.answers[2].a, id: global.Qs[global.count-1].Q.answers[2].id},
                         {a: global.Qs[global.count-1].Q.answers[3].a, id: global.Qs[global.count-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (global.count+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
        } else {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: global.Qs[0].Q.q,
                     answers: [
                         {a: global.Qs[0].Q.answers[0].a, id: global.Qs[0].Q.answers[0].id},
                         {a: global.Qs[0].Q.answers[1].a, id: global.Qs[0].Q.answers[1].id},
                         {a: global.Qs[0].Q.answers[2].a, id: global.Qs[0].Q.answers[2].id},
                         {a: global.Qs[0].Q.answers[3].a, id: global.Qs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (global.count+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
        }
      //Do we want to reset the buttons on going back? Or find a way to preserve answers?
      this.correct.setState({buttonColor: "white"});
        this.inc0.setState({buttonColor: "white"});
        this.inc1.setState({buttonColor: "white"});
        this.inc2.setState({buttonColor: "white"});
    }

  render(){
      
      var randomQs =  this.state.answers.sort(() => Math.random() - 0.5);
      
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
          id={randomQs[0].id}
          text={randomQs[0].a}
          ref = {ref => this.inc0 = ref}
        ></QuizButton>
        <QuizButton
          id={randomQs[1].id}
          text={randomQs[1].a}
          ref = {ref => this.inc1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomQs[2].id}
          text={randomQs[2].a}
          ref = {ref => this.inc2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomQs[3].id}
          text={randomQs[3].a}
          ref = {ref => this.correct = ref}
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