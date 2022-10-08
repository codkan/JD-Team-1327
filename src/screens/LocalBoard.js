import React, {Component} from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

var last;
var next;
var names = [];
var name0;
var scores = [];

export default class LocalBoard extends Component{
    constructor(props) {
        super(props);
    };

  handleBackNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("LocalBoard", {topic: last});
    } else {
        this.props.navigation.navigate("Menu", {module:"LocalBoard"});
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Resources", {topic: next});
    } else {
        () => this.props.navigation.navigate("Resources", {topic: "Parental Health"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "Resources"});
  };

    goInformation = (_topic) => {
      this.props.navigation.navigate("Information", {topic: _topic});
    };

  getScores = async () => {
    names = await AsyncStorage.getAllKeys();
    console.log(names[0]);
    for (var i = 0; i < names.length; i++) {
        scores.push(await AsyncStorage.getItem(names[i]));
    };
    console.log(scores);
  }

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "LocalBoard";
            next = "Burns";
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            break;
        default:
            break
    };

    this.getScores();

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={this.handleBackNav}
        ></BackButton>
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></BackButton>
    </View>

<Text allowFontScaling={true} style={CoreStyle.title}> {this.props.navigation.getParam('topic') + " Resources"}: </Text>

<ScrollView>
    <Text allowFontScaling={true} style={CoreStyle.content}>{names[0]}</Text>
</ScrollView>

<View style={CoreStyle.center}>
    <MainButton
          text={"Go to " + this.props.navigation.getParam('topic')}
          onPress={() => this.goInformation(this.props.navigation.getParam('topic'))}
          txtColor={global.text}
    ></MainButton>
</View>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  };
}