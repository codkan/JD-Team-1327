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

export default class TMenu extends Component {
    constructor(props) {
        super(props);
    };

    goBoard = (_level) => {
        this.props.navigation.navigate("GlobalBoard", {level: _level});
    }

  render () {
    r = 0;
    g = 16;
    b = 255;
    for (let i = 0; i < 3; i++) {
        var _r = (255/3)*i;
        var _g = 16+((239/3)*i);
        var _b = b;
        colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
        colors.push("rgb("+_r+","+_g+","+_b+")");
    }
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <View style={styles.buttonContainer}>

            <Crayons fontSize={4} text={"Level 1"} onPress={() => this.goBoard("Level 1")} color1={colors[4]} color2={colors[5]}/>
            <Crayons fontSize={4} text={"Level 2"} onPress={() => this.goBoard("Level 2")} color1={colors[2]} color2={colors[3]}/>
            <Crayons fontSize={4} text={"Level 3"} onPress={() => this.goBoard("Level 3")} color1={colors[0]} color2={colors[1]}/>

        </View>

        <Navbar navigation={this.props.navigation}/>

      </ImageBackground>
      );
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
});