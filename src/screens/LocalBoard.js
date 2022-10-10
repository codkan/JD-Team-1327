import React, {Component} from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

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
        s.push([n[i], await AsyncStorage.getItem(n[i])]);
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
        this.props.navigation.navigate("Menu", {module:"LocalBoard"});
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("LocalBoard", {topic: next});
    } else {
        () => this.props.navigation.navigate("LocalBoard", {topic: "Parental Health"})
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

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <Text allowFontScaling={true} style={CoreStyle.title}> {"Quiz Scores"}: </Text>

    <SafeAreaView>
        <FlatList style={CoreStyle.leaderboard}
            data={this.state.scores}
            renderItem={this.ItemView}
            ItemSeparatorComponent={this.ItemSeparatorView}
            keyExtractor={(item) => item}
        />
    </SafeAreaView>

    <View style={CoreStyle.center}>
        <MainButton
              text={"Go to Quizzes"}
              onPress={() => this.props.navigation.navigate("Menu", {module:"Quiz"})}
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