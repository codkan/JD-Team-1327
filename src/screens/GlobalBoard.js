import React, {Component} from "react";
import { ImageBackground, Image, Text, View, FlatList } from "react-native";
import MMButton from "../components/buttons/MMButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import clock from "../assets/badges/clockBadge.png";
import coffee from "../assets/badges/coffeecupBadge.png";
import heart from "../assets/badges/heartBadge.png";
import right from "../assets/buttons/right.png";
import left from "../assets/buttons/left.png";

let last;
let next;
let data = [];
let sorted = [];
let hdr;
let lvl;

export default class GlobalBoard extends Component{
    constructor(props) {
        super(props);
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
    if (this.props.navigation.getParam("level") != "Level 1") {
        this.props.navigation.navigate("GlobalBoard", {level: last});
    } else {
        this.goMenu();
    }
  }

  handleNextNav = async () => {
    if (this.props.navigation.getParam("level") != "Level 3") {
        this.props.navigation.navigate("GlobalBoard", {level: next});
    } else {
        this.props.navigation.navigate("GlobalBoard", {level: "Level 3"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "GlobalBoard"});
  };

  render (){
    let s = [];
    switch(this.props.navigation.getParam('level')) {
        case "Level 1":
            last = "TMenu";
            next = "Level 2";
            hdr = clock;
            lvl = "Foyer";
            s = this.props.navigation.getParam('s1');
            break;
        case "Level 2":
            last = "Level 1";
            next = "Level 3";
            hdr = coffee;
            lvl = "Kitchen";
            s = this.props.navigation.getParam('s2');
            break;
        case "Level 3":
            last = "Level 2";
            next = "Level 3";
            hdr = heart;
            lvl = "Yard"
            s = this.props.navigation.getParam('s3');;
            break;
        default:
            break;
        }

    sorted = s.sort((a,b)=> b[1] < a[1]);

    return (

    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MMButton
            img={left}
            txtColor={global.text}
            onPress={this.handleLastNav}
        ></MMButton>
        <TopicButton
              text="Back to Levels"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <MMButton
            img={right}
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></MMButton>
    </View>

    <Text allowFontScaling={true} style={CoreStyle.title2}>{this.props.navigation.getParam("level") + " (" + lvl + ") Times"}: </Text>

        <FlatList style={CoreStyle.leaderboard}
            data={sorted}
            renderItem={this.ItemView}
            ItemSeparatorComponent={this.ItemSeparatorView}
            keyExtractor={(item) => item}
        />

    <Image style={CoreStyle.headimg} source={hdr}/>

    <View style={CoreStyle.center2}>
        <MainButton
              text={"Go to Game"}
              onPress={() => this.props.navigation.navigate("Home")}
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