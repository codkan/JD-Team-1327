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

var carCount = 0;
var carScore = 0;
var lastC = false;
var CarQs = Quizzes.CarQs;

export default class CarRev1 extends Component{
    constructor(){
        super();
        carCount = 0;
        carScore = 0;
        CarQs = CarQs.sort(() => Math.random() - 0.5);
        var question = CarQs[carCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (carCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (carCount+1),
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
            carScore++;
            lastC = true;
        } else {
            lastC = false;
        }
        if (carCount < CarQs.length-1) {
            carCount++;
            var question = CarQs[carCount].Q;
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
                qNum: "Question " + (carCount+1),
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
                score: carScore,
                total: CarQs.length,
                text: "Car Safety",
            });
        }
    };

    deRender = () => {
        if (carCount == 0) {
            this.props.navigation.navigate("Review");
            return;
        }
        carCount--;
        var question = CarQs[carCount].Q;
        if (carScore > 0 && lastC == true) {
            carScore--;
        }
        if (carCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: CarQs[carCount-1].Q.q,
                     answers: [
                         {a: CarQs[carCount-1].Q.answers[0].a, id: CarQs[carCount-1].Q.answers[0].id},
                         {a: CarQs[carCount-1].Q.answers[1].a, id: CarQs[carCount-1].Q.answers[1].id},
                         {a: CarQs[carCount-1].Q.answers[2].a, id: CarQs[carCount-1].Q.answers[2].id},
                         {a: CarQs[carCount-1].Q.answers[3].a, id: CarQs[carCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (carCount+1),
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
                     Q: CarQs[0].Q.q,
                     answers: [
                         {a: CarQs[0].Q.answers[0].a, id: CarQs[0].Q.answers[0].id},
                         {a: CarQs[0].Q.answers[1].a, id: CarQs[0].Q.answers[1].id},
                         {a: CarQs[0].Q.answers[2].a, id: CarQs[0].Q.answers[2].id},
                         {a: CarQs[0].Q.answers[3].a, id: CarQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (carCount+1),
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
      
      var randomCarQs =  this.state.answers.sort(() => Math.random() - 0.5);
      
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

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
          id={randomCarQs[0].id}
          text={randomCarQs[0].a}
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomCarQs[1].id}
          text={randomCarQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomCarQs[2].id}
          text={randomCarQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randomCarQs[3].id}
          text={randomCarQs[3].a}
          ref = {ref => this.b4 = ref}
        ></QuizButton>
        </View>

        <View style={CoreStyle.row}>
        <MainButton
            text="Go to Car Safety"
            onPress={() => this.props.navigation.navigate("Traffic")}
        ></MainButton>
        </View>

        <View style = {CoreStyle.pushdown}>
        <Navbar navigation={this.props.navigation}/>
        </View>

        </ImageBackground>
      );
  }
}