import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

var drownCount = 0;
var drownScore = 0;
var DrownQs = [
    {Q: {
        q: "What percentage of nonfatal drownings require hospitalization?",
        answers: [
            {a: "10%", id:"inc0"},
            {a: "75%", id:"inc1"},
            {a: "60%", id:"inc2"},
            {a: "40%", id:"correct"},
        ],
    }},
    {Q: {
        q: "What is the most common place for children under 1 to drown?",
        answers: [
            {a: "Natural bodies of water", id:"inc0"},
            {a: "Swimming pools", id:"inc1"},
            {a: "Really big puddles", id:"inc2"},
            {a: "Bathtub", id:"correct"},
        ],
    }},
    {Q: {
        q: "What is the most common place for older children to drown?",
        answers: [
            {a: "Home pools", id:"inc0"},
            {a: "Bathtub", id:"inc1"},
            {a: "Public pools", id:"inc2"},
            {a: "Natural bodies of water", id:"correct"},
        ],
    }},
    {Q: {
        q: "Where can infants be left unattended?",
        answers: [
            {a: "Home pools", id:"inc0"},
            {a: "Bathtub", id:"inc1"},
            {a: "Public pools", id:"inc2"},
            {a: "No body of water", id:"correct"},
        ],
    }},
    {Q: {
        q: "Which of these is NOT one of the 5 water survival skills?",
        answers: [
            {a: "Surface after jumping", id:"inc0"},
            {a: "Tread water for 1 minute", id:"inc1"},
            {a: "Exit pool without ladder", id:"inc2"},
            {a: "Swim 60 yards", id:"correct"},
        ],
    }},
];

export default class DrowningR extends Component{
    constructor(){
        super();
        drownCount = 0;
        drownScore = 0;
        DrownQs = DrownQs.sort(() => Math.random() - 0.5);
        var question = DrownQs[drownCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (drownCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (drownCount+1),
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
            drownScore++;
        }
        if (drownCount < DrownQs.length-1) {
            drownCount++;
            var question = DrownQs[drownCount].Q;
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
                qNum: "Question " + (drownCount+1),
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
            console.log(drownScore);
            this.props.navigation.navigate("DrownW", {
                score: drownScore,
                total: DrownQs.length,
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        drownCount--;
        var question = DrownQs[drownCount].Q;
        if (drownScore > 0) {
            drownScore--;
        }
        if (drownCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: DrownQs[drownCount-1].Q.q,
                     answers: [
                         {a: DrownQs[drownCount-1].Q.answers[0].a, id: DrownQs[drownCount-1].Q.answers[0].id},
                         {a: DrownQs[drownCount-1].Q.answers[1].a, id: DrownQs[drownCount-1].Q.answers[1].id},
                         {a: DrownQs[drownCount-1].Q.answers[2].a, id: DrownQs[drownCount-1].Q.answers[2].id},
                         {a: DrownQs[drownCount-1].Q.answers[3].a, id: DrownQs[drownCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (drownCount+1),
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
                     Q: DrownQs[0].Q.q,
                     answers: [
                         {a: DrownQs[0].Q.answers[0].a, id: DrownQs[0].Q.answers[0].id},
                         {a: DrownQs[0].Q.answers[1].a, id: DrownQs[0].Q.answers[1].id},
                         {a: DrownQs[0].Q.answers[2].a, id: DrownQs[0].Q.answers[2].id},
                         {a: DrownQs[0].Q.answers[3].a, id: DrownQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (drownCount+1),
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
      
      var randomFallQs =  this.state.answers.sort(() => Math.random() - 0.5);
      
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
          id={randomFallQs[0].id}
          text={randomFallQs[0].a}
          ref = {ref => this.inc0 = ref}
        ></QuizButton>
        <QuizButton
          id={randomFallQs[1].id}
          text={randomFallQs[1].a}
          ref = {ref => this.inc1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomFallQs[2].id}
          text={randomFallQs[2].a}
          ref = {ref => this.inc2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomFallQs[3].id}
          text={randomFallQs[3].a}
          ref = {ref => this.correct = ref}
        ></QuizButton>
        </View>

        <View style={styles.container}>
        <MainButton
            text="Go to Drowning"
            onPress={() => this.props.navigation.navigate("Drownings")}
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