import React, {Component} from "react";
import { ImageBackground, Text, View } from "react-native";
import MMButton from "../components/buttons/MMButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/buttons/QuizButton";
import { CoreStyle } from "../components/CoreStyle";
import { Quizzes } from "../json/QAbank.json";
import right from "../assets/buttons/right.png";
import left from "../assets/buttons/left.png";

let count = 0;
let score = 0;
let lastC = false;
let Qs;

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
        let question = Qs[count].Q;

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
    }

    goMenu = () => {
        this.props.navigation.navigate("Menu", {module: "Quiz"});
    };

    goInformation = (_topic) => {
      this.props.navigation.navigate("Information", {topic: _topic});
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
            let question = Qs[count].Q;
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
        let question = Qs[count].Q;
        if (score > 0 && lastC) {
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
      let randomQs =  this.state.answers.sort(() => Math.random() - 0.5);
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <View style={CoreStyle.topnavbuttons}>
            <MMButton onPress={this.deRender}
                  img={left}
                  txtColor={global.text}
            ></MMButton>
            <TopicButton
                  text="Back to Topics"
                  onPress={this.goMenu}
                  txtColor={global.text}
            ></TopicButton>
            <MMButton onPress={this.reRender}
                  img={right}
                  txtColor={global.text}
            ></MMButton>
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
            onPress={() => this.goInformation(this.props.navigation.getParam('topic'))}
        ></MainButton>
        </View>

        <View style = {CoreStyle.pushdown}>
        <Navbar navigation={this.props.navigation}/>
        </View>

        </ImageBackground>
      );
  }
}