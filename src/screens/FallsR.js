import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";
import { Quizzes } from "../QAbank";

var fallCount = 0;
var fallScore = 0;
var lastC = false;
var FallQs = Quizzes.FallQs;

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
        if (this.b1.state.buttonColor == "green" || this.b2.state.buttonColor == "green" || this.b3.state.buttonColor == "green" || this.b4.state.buttonColor == "green") {
            fallScore++;
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
            this.b1.setState({buttonColor: global.color2});
            this.b2.setState({buttonColor: global.color2});
            this.b3.setState({buttonColor: global.color2});
            this.b4.setState({buttonColor: global.color2});
        } else {
            this.props.navigation.navigate("Win", {
                score: fallScore,
                total: FallQs.length,
                text: "Falls",
            });
        }
    };

    deRender = () => {
        if (fallCount == 0) {
            this.props.navigation.navigate("Review");
            return;
        }
        fallCount--;
        var question = FallQs[fallCount].Q;
        if (fallScore > 0 && lastC == true) {
            fallScore--;
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
        this.b1.setState({buttonColor: global.color2});
        this.b2.setState({buttonColor: global.color2});
        this.b3.setState({buttonColor: global.color2});
        this.b4.setState({buttonColor: global.color2});
    }

  render(){
      var randomFallQs =  this.state.answers.sort(() => Math.random() - 0.5);
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <View style={CoreStyle.topnavbuttons}>
            <BackButton onPress={this.deRender}
                  text="<"
                  txtColor={global.text}
            ></BackButton>
            <MediaButton
                  text="Back to Review"
                  onPress={() => this.props.navigation.navigate("Review")}
                  txtColor={global.text}
            ></MediaButton>
            <BackButton onPress={this.reRender}
                  text=">"
                  txtColor={global.text}
            ></BackButton>
        </View>

        <Text allowFontScaling={true} style={CoreStyle.title}> {this.state.qNum} </Text>
        <Text allowFontScaling={true}> {'\n'} </Text>
        <Text allowFontScaling={true} style={CoreStyle.subtitle}> {this.state.Q} </Text>

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