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
var lastC = false;
var poisonQs = [
    {Q: {
        q: "Which of the following would be a useful place to store important emergency numbers, including the poison help number?",
        answers: [
            {a: "On a notepad hidden in a desk", id:"inc0"},
            {a: "On the front door and window", id:"inc1"},
            {a: "On your fridge or table", id:"inc2"},
            {a: "In your phone or on a diaper bag", id:"correct"},
        ],
    }},
    {Q: {
        q: "Which of the following steps should you NOT take if a child has ingested laundry pods?",
        answers: [
            {a: "Call poison control for guidance", id:"inc0"},
            {a: "Immediately remove the pod from the child's mouth", id:"inc1"},
            {a: "Wash the child's face and hands and rinse out their mouth", id:"inc2"},
            {a: "Give the child water", id:"correct"},
        ],
    }},
    {Q: {
        q: "Which of the following is NOT a good way to prevent accidental poisoning?",
        answers: [
            {a: "Ensure all medicine containers are locked", id:"inc0"},
            {a: "Make sure carbon monoxide and smoke detectors are working", id:"inc1"},
            {a: "Put away cosmetics after use outside the reach of children", id:"inc2"},
            {a: "Leaving medicine open but in a high place so kids can't reach it", id:"correct"},
        ],
    }},

    {Q: {
        q: "Which of the following are a common cause of child poisoning?",
        answers: [
            {a: "Dirt and dog poop", id:"inc0"},
            {a: "Expired food and mold", id:"inc1"},
            {a: "Plastic and trash", id:"inc2"},
            {a: "Cosmetics and medicine", id:"correct"},
        ],
    }},

    {Q: {
        q: "Which of the following are risks for children?",
        answers: [
            {a: "Many common houseplants", id:"inc0"},
            {a: "Lead paint", id:"inc1"},
            {a: "Brightly colored berries", id:"inc2"},
            {a: "All of these", id:"correct"},
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
        if (this.b1.state.buttonColor == "green" || this.b2.state.buttonColor == "green" || this.b3.state.buttonColor == "green" || this.b4.state.buttonColor == "green") {
            poisonScore++;
            lastC = true;
        } else {
            lastC = false;
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
            this.b1.setState({buttonColor: "white"});
            this.b2.setState({buttonColor: "white"});
            this.b3.setState({buttonColor: "white"});
            this.b4.setState({buttonColor: "white"});
        } else {
            console.log(poisonScore);
            this.props.navigation.navigate("Win", {
                score: poisonScore,
                total: poisonQs.length,
                text: "Poisoning",
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
        poisonCount--;
        var question = poisonQs[poisonCount].Q;
        if (poisonScore > 0 && lastC == true) {
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
        this.b1.setState({buttonColor: "white"});
        this.b2.setState({buttonColor: "white"});
        this.b3.setState({buttonColor: "white"});
        this.b4.setState({buttonColor: "white"});
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
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randompoisonQs[1].id}
          text={randompoisonQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randompoisonQs[2].id}
          text={randompoisonQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randompoisonQs[3].id}
          text={randompoisonQs[3].a}
          ref = {ref => this.b4 = ref}
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