import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";
import { Quizzes } from "../QAbank.json";

var drownCount = 0;
var drownScore = 0;
var lastC = false;
var DrownQs = Quizzes.DrownQs;

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

        if (this.b1.state.buttonColor == "green" || this.b2.state.buttonColor == "green" || this.b3.state.buttonColor == "green" || this.b4.state.buttonColor == "green") {
            drownScore++;
            lastC = true;
        } else {
            lastC = false;
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
            this.b1.setState({buttonColor: "papayawhip"});
            this.b2.setState({buttonColor: "papayawhip"});
            this.b3.setState({buttonColor: "papayawhip"});
            this.b4.setState({buttonColor: "papayawhip"});
        } else {
            this.props.navigation.navigate("Win", {
                score: drownScore,
                total: DrownQs.length,
                text: "Drowning",
            });
        }
    };

    deRender = () => {
        if (drownCount == 0) {
            this.props.navigation.navigate("Review");
            return;
        }
        drownCount--;
        var question = DrownQs[drownCount].Q;
        if (drownScore > 0  && lastC == true) {
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
        this.b1.setState({buttonColor: "papayawhip"});
        this.b2.setState({buttonColor: "papayawhip"});
        this.b3.setState({buttonColor: "papayawhip"});
        this.b4.setState({buttonColor: "papayawhip"});
    }

  render(){
      
      var randomFallQs =  this.state.answers.sort(() => Math.random() - 0.5);
      
      return (
        <ImageBackground source={Background} style={CoreStyle.image}>

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

        <Text style={CoreStyle.title}> {this.state.qNum} </Text>
        <Text> {'\n'} </Text>
        <Text style={CoreStyle.subtitle}> {this.state.Q} </Text>

        <View style={CoreStyle.quizContainer}>
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

        <View style={CoreStyle.row}>
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