import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import MediaButton from "../components/buttons/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/buttons/QuizButton";
import { CoreStyle } from "../components/CoreStyle";
import { Quizzes } from "../json/QAbank.json";

var count = 0;
var score = 0;
var lastC = false;
var Qs;

export default class Quiz extends Component{
    constructor(props){
        super(props);
        count = 0;
        score = 0;
        switch(this.props.navigation.getParam('topic')) {
            case "Falls":
                Qs = Quizzes.FallQs;
                break;
            case "Burns":
                Qs = Quizzes.BurnQs;
                break;
            case "Poisonings":
                Qs = Quizzes.PoisonQs;
                break;
            case "Drownings":  
                Qs = Quizzes.DrownQs;
                break;
            case "Car Safety":
                Qs = Quizzes.CarQs;
                break;
            case "Parental Health":
                Qs = Quizzes.ParQs;
                break;
            default:
                break
        }
        
        Qs = Qs.sort(() => Math.random() - 0.5);
        var question = Qs[count].Q;

        this.state = {
            prevState: {
                qNum: "Question " + (count+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (count+1),
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
            score++;
            lastC = true;
        } else {
            lastC = false;
        }
        if (count < Qs.length-1) {
            count++;
            var question = Qs[count].Q;
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
                qNum: "Question " + (count+1),
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
                score: score,
                total: Qs.length,
                text: this.props.navigation.getParam('topic'),
            });
        }
    };

    deRender = () => {
        if (count == 0) {
            this.props.navigation.navigate("Review");
            return;
        }
        count--;
        var question = Qs[count].Q;
        if (score > 0 && lastC == true) {
            score--;
        }
        if (count > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: Qs[count-1].Q.q,
                     answers: [
                         {a: Qs[count-1].Q.answers[0].a, id: Qs[count-1].Q.answers[0].id},
                         {a: Qs[count-1].Q.answers[1].a, id: Qs[count-1].Q.answers[1].id},
                         {a: Qs[count-1].Q.answers[2].a, id: Qs[count-1].Q.answers[2].id},
                         {a: Qs[count-1].Q.answers[3].a, id: Qs[count-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (count+1),
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
                     Q: Qs[0].Q.q,
                     answers: [
                         {a: Qs[0].Q.answers[0].a, id: Qs[0].Q.answers[0].id},
                         {a: Qs[0].Q.answers[1].a, id: Qs[0].Q.answers[1].id},
                         {a: Qs[0].Q.answers[2].a, id: Qs[0].Q.answers[2].id},
                         {a: Qs[0].Q.answers[3].a, id: Qs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (count+1),
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
      var randomQs =  this.state.answers.sort(() => Math.random() - 0.5);
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

        <Text allowFontScaling={true} style={CoreStyle.qNum}> {this.state.qNum} </Text>
        <Text allowFontScaling={true}> {'\n'} </Text>
        <Text allowFontScaling={true} style={CoreStyle.question}> {this.state.Q} </Text>

        <View style={CoreStyle.quizContainer}>
        <QuizButton
          id={randomQs[0].id}
          text={randomQs[0].a}
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomQs[1].id}
          text={randomQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomQs[2].id}
          text={randomQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randomQs[3].id}
          text={randomQs[3].a}
          ref = {ref => this.b4 = ref}
        ></QuizButton>
        </View>

        <View style={CoreStyle.row}>
        <MainButton
            text={"Go to " + this.props.navigation.getParam('topic')}
            onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('topic'))}
        ></MainButton>
        </View>

        <View style = {CoreStyle.pushdown}>
        <Navbar navigation={this.props.navigation}/>
        </View>

        </ImageBackground>
      );
  }
}