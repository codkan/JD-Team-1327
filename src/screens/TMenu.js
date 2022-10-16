import React, {Component} from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import Background from "../assets/app/bg.png";
import MainButton from "../components/buttons/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";

//Board Crayons
import fallBoard from "../assets/boardCrayons/falls.png";
import burnBoard from "../assets/boardCrayons/burns.png";
import poisonBoard from "../assets/boardCrayons/poisonings.png";
import drownBoard from "../assets/boardCrayons/drownings.png";
import carBoard from "../assets/boardCrayons/carSafety.png";
import parentBoard from "../assets/boardCrayons/parentHealth.png";

var crayons = [fallBoard, burnBoard, poisonBoard, drownBoard, carBoard, parentBoard];

export default class TMenu extends Component {
    constructor(props) {
        super(props);
    };

    goBoard = (_level) => {
        this.props.navigation.navigate("GlobalBoard", {level: _level});
    }

  render () {
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <View style={CoreStyle.buttonContainer}>
            <TouchableOpacity onPress={() => this.goBoard("Level 1")}>
                <Image source={crayons[0]} style={CoreStyle.crayon}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goBoard("Level 2")}>
                <Image source={crayons[1]} style={CoreStyle.crayon}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goBoard("Level 3")}>
                <Image source={crayons[2]} style={CoreStyle.crayon}></Image>
            </TouchableOpacity>
        </View>

        <Navbar navigation={this.props.navigation}/>

      </ImageBackground>
      );
  }
}


