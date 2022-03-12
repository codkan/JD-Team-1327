import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";

var carCount = 0;
var carScore = 0;
var lastC = false;
var CarQs = [
    {Q: {
        q: "Where should a rear-facing carseat be installed?",
        answers: [
            {a: "No carseat needed", id:"inc0"},
            {a: "Passenger seat", id:"inc1"},
            {a: "Roof of the car", id:"inc2"},
            {a: "Secured in the backseat", id:"correct"},
        ],
    }},
    {Q: {
        q: "Is a seatbelt required if your child is in a booster seat?",
        answers: [
            {a: "A seatbelt is optional", id:"inc0"},
            {a: "Only a lap belt is required", id:"inc1"},
            {a: "Children don't belong in booster seats", id:"inc2"},
            {a: "A seatbelt is always required", id:"correct"},
        ],
    }},
    {Q: {
        q: "What parts of the seatbelt should be worn at all times?",
        answers: [
            {a: "Lap only", id:"inc0"},
            {a: "Chest/shoulder only", id:"inc1"},
            {a: "Neither", id:"inc2"},
            {a: "Lap and Chest/Shoulder", id:"correct"},
        ],
    }},
    {Q: {
        q: "What should you not do when kids are in the car?",
        answers: [
            {a: "Be a good role model", id:"inc0"},
            {a: "Be consistent", id:"inc1"},
            {a: "Secure children with seatbelt", id:"inc2"},
            {a: "Leave your child alone", id:"correct"},
        ],
    }},
    {Q: {
        q: "Should a broken car seat be used?",
        answers: [
            {a: "Only if it was in a minor car crash", id:"inc0"},
            {a: "If it has no more than two cracks", id:"inc1"},
            {a: "Only if there are no visible cracks", id:"inc2"},
            {a: "Never", id:"correct"},
        ],
    }},
];

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
        //console.log("reRender reached");
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
            this.b1.setState({buttonColor: "white"});
            this.b2.setState({buttonColor: "white"});
            this.b3.setState({buttonColor: "white"});
            this.b4.setState({buttonColor: "white"});
        } else {
            console.log(carScore);
            this.props.navigation.navigate("Win", {
                score: carScore,
                total: CarQs.length,
                text: "Car Safety",
            });
        }
    };

    deRender = () => {
        //console.log("deRender reached");
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
        this.b1.setState({buttonColor: "white"});
        this.b2.setState({buttonColor: "white"});
        this.b3.setState({buttonColor: "white"});
        this.b4.setState({buttonColor: "white"});
    }

  render(){
      
      var randomCarQs =  this.state.answers.sort(() => Math.random() - 0.5);
      
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

        <View style={styles.container}>
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