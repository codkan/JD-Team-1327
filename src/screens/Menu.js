import React, {Component} from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import Background from "../assets/app/bg.png";
import MainButton from "../components/buttons/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";
import Crayons from "../components/Crayons";

var colors = [];
var r = 0;
var g = 0;
var b = 0;

export default class Menu extends Component {
    constructor(props) {
        super(props);
    };

    goTopic = (_topic) => {
        this.props.navigation.navigate(this.props.navigation.getParam('module'), {topic: _topic});
    }

  render () {
    colors = [];
    switch(this.props.navigation.getParam('module')) {
        case "Information":
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
        default:
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
            break
    };
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <View style={CoreStyle.buttonContainer}>

            <Crayons fontSize={4} text={"Falls"} onPress={() => this.goTopic("Falls")} color1={colors[10]} color2={colors[11]}/>
            <Crayons fontSize={4} text={"Burns"} onPress={() => this.goTopic("Burns")} color1={colors[8]} color2={colors[9]}/>
            <Crayons fontSize={4} text={"Poisons"} onPress={() => this.goTopic("Poisonings")} color1={colors[6]} color2={colors[7]}/>
            <Crayons fontSize={4} text={"Drownings"} onPress={() => this.goTopic("Drownings")} color1={colors[4]} color2={colors[5]}/>
            <Crayons fontSize={4} text={"Car Safety"} onPress={() => this.goTopic("Car Safety")} color1={colors[2]} color2={colors[3]}/>
            <Crayons fontSize={4} text={"Parent Health"} onPress={() => this.goTopic("Parent Health")} color1={colors[0]} color2={colors[1]}/>

        </View>

        <Navbar navigation={this.props.navigation}/>

      </ImageBackground>
      );
  }
}


