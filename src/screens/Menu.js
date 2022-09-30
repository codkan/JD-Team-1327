import React, {Component} from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import Background from "../assets/app/bg.png";
import MainButton from "../components/buttons/MainButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";

//Info Crayons
import fallInfo from "../assets/infoCrayons/falls.png";
import burnInfo from "../assets/infoCrayons/burns.png";
import poisonInfo from "../assets/infoCrayons/poisonings.png";
import drownInfo from "../assets/infoCrayons/drownings.png";
import carInfo from "../assets/infoCrayons/carSafety.png";
import parentInfo from "../assets/infoCrayons/parentHealth.png";

//Media Crayons
import fallMedia from "../assets/mediaCrayons/falls.png";
import burnMedia from "../assets/mediaCrayons/burns.png";
import poisonMedia from "../assets/mediaCrayons/poisonings.png";
import drownMedia from "../assets/mediaCrayons/drownings.png";
import carMedia from "../assets/mediaCrayons/carSafety.png";
import parentMedia from "../assets/mediaCrayons/parentHealth.png";

//Review Crayons
import fallReview from "../assets/reviewCrayons/falls.png";
import burnReview from "../assets/reviewCrayons/burns.png";
import poisonReview from "../assets/reviewCrayons/poisonings.png";
import drownReview from "../assets/reviewCrayons/drownings.png";
import carReview from "../assets/reviewCrayons/carSafety.png";
import parentReview from "../assets/reviewCrayons/parentHealth.png";

//Source Crayons
import fallSource from "../assets/sourcesCrayons/falls.png";
import burnSource from "../assets/sourcesCrayons/burns.png";
import poisonSource from "../assets/sourcesCrayons/poisonings.png";
import drownSource from "../assets/sourcesCrayons/drownings.png";
import carSource from "../assets/sourcesCrayons/carSafety.png";
import parentSource from "../assets/sourcesCrayons/parentHealth.png";

var crayons;

export default class Menu extends Component {
    constructor(props) {
        super(props);
    };

    goTopic = (_topic) => {
        //TTSalert();
        this.props.navigation.navigate(this.props.navigation.getParam('module'), {topic: _topic});
    }

  render () {
    switch(this.props.navigation.getParam('module')) {
        case "Information":
            crayons = [fallInfo, burnInfo, poisonInfo, drownInfo, carInfo, parentInfo];
            break;
        case "Media":
            crayons = [fallMedia, burnMedia, poisonMedia, drownMedia, carMedia, parentMedia];
            break;
        case "Quiz":
            crayons = [fallReview, burnReview, poisonReview, drownReview, carReview, parentReview];
            break;
        case "Resources":
            crayons = [fallSource, burnSource, poisonSource, drownSource, carSource, parentSource];
            break;
        default:
            break
    };
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>
        <Text allowFontScaling={true} style={CoreStyle.moduleText}>Pick a Color to{'\n'}Choose a Topic</Text>
        <View style={CoreStyle.buttonContainer}>

        <TouchableOpacity onPress={() => this.goTopic("Falls")}>
            <Image source={crayons[0]} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTopic("Burns")}>
            <Image source={crayons[1]} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTopic("Poisonings")}>
            <Image source={crayons[2]} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTopic("Drownings")}>
            <Image source={crayons[3]} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTopic("Car Safety")}>
            <Image source={crayons[4]} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTopic("Parental Health")}>
            <Image source={crayons[5]} style={CoreStyle.crayon}></Image>
        </TouchableOpacity>
        </View>
        <Navbar navigation={this.props.navigation}/>
      </ImageBackground>
      );
  }
}


