import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

var poisonCount = 0;
var poisonScore = 0;
var poisonQs = [
    {Q: {
        q: "PoisonQ #1",
        answers: [
            {a: "p1-1", id:"inc0"},
            {a: "p1-2", id:"inc1"},
            {a: "p1-3", id:"inc2"},
            {a: "p1-4", id:"correct"},
        ],
    }},
    {Q: {
        q: "PoisonQ #2",
        answers: [
            {a: "p2-1", id:"inc0"},
            {a: "p2-2", id:"inc1"},
            {a: "p2-3", id:"inc2"},
            {a: "p2-4", id:"correct"},
        ],
    }},
    {Q: {
        q: "PoisonQ #3",
        answers: [
            {a: "p3-1", id:"inc0"},
            {a: "p3-2", id:"inc1"},
            {a: "p3-3", id:"inc2"},
            {a: "p3-4", id:"correct"},
        ],
    }},
];

export default class PoisonR extends Component{
    constructor(){
        super();
        poisonCount = 0;
        poisonScore = 0;
        poisonQs = poisonQs.sort(() => Math.random() - 0.5);
        var question = poisonQs[poisonCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (poisonCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (poisonCount+1),
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
            poisonScore++;
        }
        if (poisonCount < poisonQs.length-1) {
            poisonCount++;
            var question = poisonQs[poisonCount].Q;
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
                qNum: "Question " + (poisonCount+1),
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
            console.log(poisonScore);
            this.props.navigation.navigate("PoisonW", {
                poisonScore: poisonScore,
                total: poisonQs.length,
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        poisonCount--;
        var question = poisonQs[poisonCount].Q;
        if (poisonScore > 0) {
            poisonScore--;
        }
        if (poisonCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: poisonQs[poisonCount-1].Q.q,
                     answers: [
                         {a: poisonQs[poisonCount-1].Q.answers[0].a, id: poisonQs[poisonCount-1].Q.answers[0].id},
                         {a: poisonQs[poisonCount-1].Q.answers[1].a, id: poisonQs[poisonCount-1].Q.answers[1].id},
                         {a: poisonQs[poisonCount-1].Q.answers[2].a, id: poisonQs[poisonCount-1].Q.answers[2].id},
                         {a: poisonQs[poisonCount-1].Q.answers[3].a, id: poisonQs[poisonCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (poisonCount+1),
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
                     Q: poisonQs[0].Q.q,
                     answers: [
                         {a: poisonQs[0].Q.answers[0].a, id: poisonQs[0].Q.answers[0].id},
                         {a: poisonQs[0].Q.answers[1].a, id: poisonQs[0].Q.answers[1].id},
                         {a: poisonQs[0].Q.answers[2].a, id: poisonQs[0].Q.answers[2].id},
                         {a: poisonQs[0].Q.answers[3].a, id: poisonQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (poisonCount+1),
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

      var randompoisonQs =  this.state.answers.sort(() => Math.random() - 0.5);

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
          id={randompoisonQs[0].id}
          text={randompoisonQs[0].a}
          ref = {ref => this.inc0 = ref}
        ></QuizButton>
        <QuizButton
          id={randompoisonQs[1].id}
          text={randompoisonQs[1].a}
          ref = {ref => this.inc1 = ref}
        ></QuizButton>
        <QuizButton
          id={randompoisonQs[2].id}
          text={randompoisonQs[2].a}
          ref = {ref => this.inc2 = ref}
        ></QuizButton>
        <QuizButton
          id={randompoisonQs[3].id}
          text={randompoisonQs[3].a}
          ref = {ref => this.correct = ref}
        ></QuizButton>
        </View>

        <View style={styles.container}>
        <MainButton
            text="Go to Poisonings"
            onPress={() => this.props.navigation.navigate("Poisonings")}
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