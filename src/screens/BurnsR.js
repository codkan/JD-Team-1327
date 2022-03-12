import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

var burnCount = 0;
var burnScore = 0;
var lastC = false;
var burnQs = [
    {Q: {
        q: "What type of burn injury is the most common?",
        answers: [
            {a: "Stove injuries", id:"inc0"},
            {a: "Friction burns", id:"inc1"},
            {a: "Electrical burns", id:"inc2"},
            {a: "Scalds", id:"correct"},
        ],
    }},
    {Q: {
        q: "What should be the maximum temperature for your water heater?",
        answers: [
            {a: "100 degrees Farenheit", id:"inc0"},
            {a: "140 degrees Farenheit", id:"inc1"},
            {a: "130 degrees Farenheit", id:"inc2"},
            {a: "120 degrees Farenheit", id:"correct"},
        ],
    }},
    {Q: {
        q: "Under which circumstance should you test temperatures before your child?",
        answers: [
            {a: "When microwaving food", id:"inc0"},
            {a: "When bathing your child", id:"inc1"},
            {a: "Playing on metal playground equipment", id:"inc2"},
            {a: "Under all these situations", id:"correct"},
        ],
    }},

    {Q: {
        q: "What's the first thing you should do if your child gets a burn injury?",
        answers: [
            {a: "Apply ointment", id:"inc0"},
            {a: "Pop blisters to prevent infection", id:"inc1"},
            {a: "Wrap it in a bandage or gauze", id:"inc2"},
            {a: "Cool the area with cold water", id:"correct"},
        ],
    }},

    {Q: {
        q: "Which one of these accurately describes a third-degree burn?",
        answers: [
            {a: "Larger than 4 inches in length", id:"inc0"},
            {a: "Particularly sensitive/critical body part", id:"inc1"},
            {a: "On the outer later of skin", id:"inc2"},
            {a: "Going through all skin layers", id:"correct"},
        ],
    }},
];

export default class BurnR extends Component{
    constructor(){
        super();
        burnCount = 0;
        burnScore = 0;
        burnQs = burnQs.sort(() => Math.random() - 0.5);
        var question = burnQs[burnCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (burnCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (burnCount+1),
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
            burnScore++;
            lastC = true;
        } else {
            lastC = false;
        }
        if (burnCount < burnQs.length-1) {
            burnCount++;
            var question = burnQs[burnCount].Q;
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
                qNum: "Question " + (burnCount+1),
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
            console.log(burnScore);
            this.props.navigation.navigate("BurnW", {
                burnScore: burnScore,
                total: burnQs.length,
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        burnCount--;
        var question = burnQs[burnCount].Q;
        if (burnScore > 0  && lastC == true) {
            burnScore--;
        }
        if (burnCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: burnQs[burnCount-1].Q.q,
                     answers: [
                         {a: burnQs[burnCount-1].Q.answers[0].a, id: burnQs[burnCount-1].Q.answers[0].id},
                         {a: burnQs[burnCount-1].Q.answers[1].a, id: burnQs[burnCount-1].Q.answers[1].id},
                         {a: burnQs[burnCount-1].Q.answers[2].a, id: burnQs[burnCount-1].Q.answers[2].id},
                         {a: burnQs[burnCount-1].Q.answers[3].a, id: burnQs[burnCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (burnCount+1),
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
                     Q: burnQs[0].Q.q,
                     answers: [
                         {a: burnQs[0].Q.answers[0].a, id: burnQs[0].Q.answers[0].id},
                         {a: burnQs[0].Q.answers[1].a, id: burnQs[0].Q.answers[1].id},
                         {a: burnQs[0].Q.answers[2].a, id: burnQs[0].Q.answers[2].id},
                         {a: burnQs[0].Q.answers[3].a, id: burnQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (burnCount+1),
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

      var randomburnQs =  this.state.answers.sort(() => Math.random() - 0.5);

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
          id={randomburnQs[0].id}
          text={randomburnQs[0].a}
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomburnQs[1].id}
          text={randomburnQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomburnQs[2].id}
          text={randomburnQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randomburnQs[3].id}
          text={randomburnQs[3].a}
          ref = {ref => this.b4 = ref}
        ></QuizButton>
        </View>

        <View style={styles.container}>
        <MainButton
            text="Go to Burns"
            onPress={() => this.props.navigation.navigate("Burns")}
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