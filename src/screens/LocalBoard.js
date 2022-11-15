import React, {Component} from "react";
import { ImageBackground, Image, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MMButton from "../components/buttons/MMButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import right from "../assets/buttons/right.png";
import left from "../assets/buttons/left.png";

//images
import fall_hdr from "../assets/fallsMM/falls.png";
import burn_hdr from "../assets/BurnsMM/burn_hdr.png";
import poison_hdr from "../assets/PoisoningsMM/poison_hdr.png";
import drown_hdr from "../assets/drownMM/drown.png";
import car_hdr from "../assets/carSafetyMM/carSafety.png";
import par_hdr from "../assets/parentalHealthMM/ppd2.png";

let topic;
let hdr;
let last;
let next;

export default class LocalBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        }
        this.getScores();
    }

  async getScores() {
    let n = [];
    let s = [];
    n = await AsyncStorage.getAllKeys();
    for (let value of n) {
        if (!value.includes("saved")) {
            if (topic.includes(" ")) {
                if (value.split(" ")[0] + " " + value.split(" ")[1] == topic) {
                    s.push([value.split(" ")[2], await AsyncStorage.getItem(value)]);
                }
            } else {
                if (value.split(" ")[0] == topic) {
                    s.push([value.split(" ")[1], await AsyncStorage.getItem(value)]);
                }
            }
        }
    }
    let sorted = s.sort((a,b)=> b[1] > a[1]);

    this.setState({
        scores: sorted
    });
  }

    ItemView = ({ item }) => {
        return (
          // Flat List Item
          <View style={CoreStyle.board}>
            <Text style={CoreStyle.entry}>{item[0]}</Text>
            <View style={{flexDirection: "row"}}>
                <View style={{width: 5, height: 60, backgroundColor: global.color}}/>
                <Text style={CoreStyle.entry}>{item[1]}</Text>
            </View>
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

  handleLastNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("LocalBoard", {topic: last});
        this.getScores();
    } else {
        this.goMenu();
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("LocalBoard", {topic: next});
        this.getScores();
    } else {
        this.props.navigation.navigate("LocalBoard", {topic: "Parental Health"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "LocalBoard"});
  };

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            topic = "Falls";
            hdr = fall_hdr;
            last = "LocalBoard";
            next = "Burns";
            break;
        case "Burns":
            topic = "Burns";
            hdr = burn_hdr;
            last = "Falls";
            next = "Poisonings";
            break;
        case "Poisonings":
            topic = "Poisonings";
            hdr = poison_hdr;
            last = "Burns";
            next = "Drownings";
            break;
        case "Drownings":
            topic = "Drownings";
            hdr = drown_hdr;
            last =  "Poisonings";
            next = "Car Safety";
            break;
        case "Car Safety":
            topic = "Car Safety";
            hdr = car_hdr;
            last = "Drownings";
            next = "Parental Health";
            break;
        case "Parental Health":
            topic = "Parent Health";
            hdr = par_hdr;
            last = "Car Safety";
            next = "Parental Health";
            break;
        default:
            break
    }

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MMButton
            img={left}
            txtColor={global.text}
            onPress={this.handleLastNav}
        ></MMButton>
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <MMButton
            img={right}
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></MMButton>
    </View>

    <Text allowFontScaling={true} style={CoreStyle.title2}> {topic + " Scores"}: </Text>

        <FlatList style={CoreStyle.leaderboard}
            data={this.state.scores}
            renderItem={this.ItemView}
            ItemSeparatorComponent={this.ItemSeparatorView}
            keyExtractor={(item) => item}
        />

    <Image style={CoreStyle.headimg} source={hdr}/>

    <View style={CoreStyle.center2}>
        <MainButton
              text={"Go to " + topic + " Quiz"}
              onPress={() => this.props.navigation.navigate("Quiz", {topic: this.props.navigation.getParam('topic')})}
              txtColor={global.text}
        ></MainButton>
    </View>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  }
}