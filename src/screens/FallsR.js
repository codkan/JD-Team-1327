import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

var fallCount = 0;
var fallScore = 0;
var lastC = false;
var FallQs = [
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
    {Q: {
        q: "Where should TVs be placed?",
        answers: [
            {a: "Low Stands", id:"inc0"},
            {a: "High-standing Furniture", id:"inc1"},
            {a: "Wall-Mounted", id:"inc2"},
            {a: "Low stands if older, mounted if newer", id:"correct"},
        ],
    }},
    {Q: {
        q: "Which of these do you NOT want in a stroller?",
        answers: [
            {a: "Wide Wheel-base", id:"inc0"},
            {a: "Low Seat", id:"inc1"},
            {a: "Waist-Level Handlebars", id:"inc2"},
            {a: "Large Leg Openings", id:"correct"},
        ],
    }},
];

export default class FallsR extends Component{
    constructor(){
        super();
        fallCount = 0;
        fallScore = 0;
        FallQs = FallQs.sort(() => Math.random() - 0.5);
        var question = FallQs[fallCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (fallCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (fallCount+1),
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
        if (this.b1.state.buttonColor == "green" || this.b2.state.buttonColor == "green" || this.b3.state.buttonColor == "green" || this.b4.state.buttonColor == "green") {
            fallScore++;
            console.log(fallScore);
            lastC = true;
        } else {
            lastC = false;
        }
        if (fallCount < FallQs.length-1) {
            fallCount++;
            var question = FallQs[fallCount].Q;
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
                qNum: "Question " + (fallCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
            this.b1.setState({buttonColor: "white"});
            this.b2.setState({buttonColor: "white"});
            this.b3.setState({buttonColor: "white"});
            this.b4.setState({buttonColor: "white"});
        } else {
            console.log(fallCount);
            this.props.navigation.navigate("FallW", {
                score: fallScore,
                total: FallQs.length,
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        fallCount--;
        var question = FallQs[fallCount].Q;
        if (fallScore > 0 && lastC == true) {
            fallScore--;
            console.log(fallScore);
        }
        if (fallCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: FallQs[fallCount-1].Q.q,
                     answers: [
                         {a: FallQs[fallCount-1].Q.answers[0].a, id: FallQs[fallCount-1].Q.answers[0].id},
                         {a: FallQs[fallCount-1].Q.answers[1].a, id: FallQs[fallCount-1].Q.answers[1].id},
                         {a: FallQs[fallCount-1].Q.answers[2].a, id: FallQs[fallCount-1].Q.answers[2].id},
                         {a: FallQs[fallCount-1].Q.answers[3].a, id: FallQs[fallCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (fallCount+1),
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
                     Q: FallQs[0].Q.q,
                     answers: [
                         {a: FallQs[0].Q.answers[0].a, id: FallQs[0].Q.answers[0].id},
                         {a: FallQs[0].Q.answers[1].a, id: FallQs[0].Q.answers[1].id},
                         {a: FallQs[0].Q.answers[2].a, id: FallQs[0].Q.answers[2].id},
                         {a: FallQs[0].Q.answers[3].a, id: FallQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (fallCount+1),
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
        this.b1.setState({buttonColor: "white"});
        this.b2.setState({buttonColor: "white"});
        this.b3.setState({buttonColor: "white"});
        this.b4.setState({buttonColor: "white"});
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
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomFallQs[1].id}
          text={randomFallQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomFallQs[2].id}
          text={randomFallQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randomFallQs[3].id}
          text={randomFallQs[3].a}
          ref = {ref => this.b4 = ref}
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