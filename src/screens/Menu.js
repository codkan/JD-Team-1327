import React, {Component} from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import Background from "../assets/app/bg.png";
import MainButton from "../components/buttons/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";
import Crayon from "../components/Crayon";
import check from "../assets/badges/checkmarkBadge.png";

var colors = [];
var r = 0;
var g = 0;
var b = 0;
var hdr = "";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    };

    goTopic = (_topic) => {
        this.props.navigation.navigate(this.props.navigation.getParam('module'), {topic: _topic});
    }

    goBoard = (_level) => {
        this.props.navigation.navigate("GlobalBoard", {level: _level});
    }

  render () {
    colors = [];
    switch(this.props.navigation.getParam('module')) {
        case "Information":
            hdr = "Informative Content";
            r = 255;
            g = 0;
            b = 10;
            for (let i = 0; i < 6; i++) {
                var _r = r;
                var _g = (255/6)*i;
                var _b = (245/6)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "Media":
            hdr = "Multimedia Module";
            r = 255;
            g = 104;
            b = 0;
            for (let i = 0; i < 6; i++) {
                var _r = r;
                var _g = 104+((151/6)*i);
                var _b = (255/6)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "Quiz":
            hdr = "Review Quizzes";
            r = 0;
            g = 255;
            b = 72;
            for (let i = 0; i < 6; i++) {
                var _r = (255/6)*i;
                var _g = g;
                var _b = (183/6)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "Resources":
            hdr = "Referenced Sources";
            r = 0;
            g = 176;
            b = 255;
            for (let i = 0; i < 6; i++) {
                var _r = (108/6)*i;
                var _g = (255/6)*i;
                var _b = b;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "LocalBoard":
            hdr = "Local Quiz Scores";
            r = 147;
            g = 0;
            b = 255;
            for (let i = 0; i < 6; i++) {
                var _r = 147+((108/6)*i);
                var _g = (255/6)*i;
                var _b = b;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        default:
            r = 255;
            g = 242;
            b = 0;
            for (let i = 0; i < 3; i++) {
                var _r = 255;
                var _g = 242+(i*3);
                var _b = (152/3)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
              return (
                <ImageBackground source={global.bg} style={CoreStyle.image}>

                <View style={CoreStyle.tmenuContainer}>
                <Text style={CoreStyle.title}>Global Game Leaderboard</Text>

                    <Crayon text={"Living Room"} onPress={() => this.goBoard("Level 1")} color1={colors[4]} color2={colors[5]}/>
                    <Crayon text={"Kitchen"} onPress={() => this.goBoard("Level 2")} color1={colors[2]} color2={colors[3]}/>
                    <Crayon text={"Backyard"} onPress={() => this.goBoard("Level 3")} color1={colors[0]} color2={colors[1]}/>

                <Image style={CoreStyle.headimg} source={check}/>
                </View>

                <Navbar navigation={this.props.navigation}/>

              </ImageBackground>
              );
    };
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <Text style={CoreStyle.title3}>{hdr}</Text>

        <View style={CoreStyle.menuContainer}>

            <Crayon text={"Falls"} onPress={() => this.goTopic("Falls")} color1={colors[10]} color2={colors[11]}/>
            <Crayon text={"Burns"} onPress={() => this.goTopic("Burns")} color1={colors[8]} color2={colors[9]}/>
            <Crayon text={"Poisons"} onPress={() => this.goTopic("Poisonings")} color1={colors[6]} color2={colors[7]}/>
            <Crayon text={"Drownings"} onPress={() => this.goTopic("Drownings")} color1={colors[4]} color2={colors[5]}/>
            <Crayon text={"Vehicles"} onPress={() => this.goTopic("Car Safety")} color1={colors[2]} color2={colors[3]}/>
            <Crayon text={"Parents"} onPress={() => this.goTopic("Parental Health")} color1={colors[0]} color2={colors[1]}/>

        </View>

        <Navbar navigation={this.props.navigation}/>

      </ImageBackground>
      );
  }
}


