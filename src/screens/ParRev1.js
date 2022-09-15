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

var parCount = 0;
var parScore = 0;
var lastC = false;
var ParQs = Quizzes.ParQs;

export default class ParRev1 extends Component{
    constructor(){
        super();
        parCount = 0;
        parScore = 0;
        ParQs = ParQs.sort(() => Math.random() - 0.5);
        var question = ParQs[parCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (parCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (parCount+1),
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
            parScore++;
            lastC = true;
        } else {
            lastC = false;
        }
        if (parCount < ParQs.length-1) {
            parCount++;
            var question = ParQs[parCount].Q;
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
                qNum: "Question " + (parCount+1),
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
                score: parScore,
                total: ParQs.length,
                text: "Parents",
            });
        }
    };

    deRender = () => {
        if (parCount == 0) {
            this.props.navigation.navigate("Review");
            return;
        }
        parCount--;
        var question = ParQs[parCount].Q;
        if (parScore > 0 && lastC == true) {
            parScore--;
        }
        if (parCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: ParQs[parCount-1].Q.q,
                     answers: [
                         {a: ParQs[parCount-1].Q.answers[0].a, id: ParQs[parCount-1].Q.answers[0].id},
                         {a: ParQs[parCount-1].Q.answers[1].a, id: ParQs[parCount-1].Q.answers[1].id},
                         {a: ParQs[parCount-1].Q.answers[2].a, id: ParQs[parCount-1].Q.answers[2].id},
                         {a: ParQs[parCount-1].Q.answers[3].a, id: ParQs[parCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (parCount+1),
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
                     Q: ParQs[0].Q.q,
                     answers: [
                         {a: ParQs[0].Q.answers[0].a, id: ParQs[0].Q.answers[0].id},
                         {a: ParQs[0].Q.answers[1].a, id: ParQs[0].Q.answers[1].id},
                         {a: ParQs[0].Q.answers[2].a, id: ParQs[0].Q.answers[2].id},
                         {a: ParQs[0].Q.answers[3].a, id: ParQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (parCount+1),
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
      
      var randomParQs =  this.state.answers.sort(() => Math.random() - 0.5);
      
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
          id={randomParQs[0].id}
          text={randomParQs[0].a}
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomParQs[1].id}
          text={randomParQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomParQs[2].id}
          text={randomParQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randomParQs[3].id}
          text={randomParQs[3].a}
          ref = {ref => this.b4 = ref}
        ></QuizButton>
        </View>

        <View style={CoreStyle.row}>
        <MainButton
            text="Go to Parental Health"
            onPress={() => this.props.navigation.navigate("ParentalHealth")}
        ></MainButton>
        </View>

        <View style = {CoreStyle.pushdown}>
        <Navbar navigation={this.props.navigation}/>
        </View>

        </ImageBackground>
      );
  }
}