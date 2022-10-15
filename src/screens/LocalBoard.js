import React, {Component} from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

var topic;
var last;
var next;

export default class LocalBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        }
        this.getScores();
    };

  async getScores() {
    var n = [];
    var s = [];
    n = await AsyncStorage.getAllKeys();
    for (var i = 0; i < n.length; i++) {
        if (n[i].split(" ")[0] == topic) {
            s.push([n[i].split(" ")[1], await AsyncStorage.getItem(n[i])]);
        }
    };
    this.setState({
        scores: s.sort((a,b)=> b[1] - a[1])
    });
  }

    ItemView = ({ item }) => {
        return (
          // Flat List Item
          <View style={CoreStyle.board}>
            <Text style={CoreStyle.entry}>{item[0]}</Text>
            <Text style={CoreStyle.entry}>{item[1]}</Text>
          </View>
        );
    };

    ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 2,
              width: '100%',
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}
          />
        );
    };

  handleBackNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("LocalBoard", {topic: last});
    } else {
        this.goMenu();
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("LocalBoard", {topic: next});
    } else {
        this.props.navigation.navigate("LocalBoard", {topic: "Parental Health"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "LocalBoard"});
  };

    goInformation = (_topic) => {
      this.props.navigation.navigate("Information", {topic: _topic});
    };

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            topic = "Falls";
            last = "LocalBoard";
            next = "Burns";
            break;
        case "Burns":
            topic = "Burns";
            last = "Falls";
            next = "Poisonings";
            break;
        case "Poisonings":
            topic = "Poisonings";
            last = "Burns";
            next = "Drownings";
            break;
        case "Drownings":
            topic = "Drownings";
            last =  "Poisonings";
            next = "Car Safety";
            break;
        case "Car Safety":
            topic = "Car Safety";
            last = "Drownings";
            next = "Parental Health";
            break;
        case "Parental Health":
            topic = "Parental Health";
            last = "Car Safety";
            next = "Parental Health";
            break;
        default:
            break
    };

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

    <Text allowFontScaling={true} style={CoreStyle.title}> {topic+" Scores"}: </Text>

    <SafeAreaView>
        <FlatList style={CoreStyle.leaderboard}
            data={this.state.scores}
            renderItem={this.ItemView}
            ItemSeparatorComponent={this.ItemSeparatorView}
            keyExtractor={(item) => item}
        />
    </SafeAreaView>

    <View style={CoreStyle.center2}>
        <MainButton
              text={"Go to " + topic + " Quiz"}
              onPress={() => this.props.navigation.navigate("Quiz", {topic: topic})}
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