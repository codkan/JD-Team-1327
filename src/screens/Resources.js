import React, {Component} from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/app/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import { Sources } from "../json/Bib.json";

var last;
var next;
var srcs;

export default class Resources extends Component{
    constructor(props) {
        super(props);
    };

  handleBackNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("Resources", {topic: last});
    } else {
        this.props.navigation.navigate("Sources");
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Resources", {topic: next});
    } else {
        () => this.props.navigation.navigate("Resources", {topic: "Parental Health"})
    }
  }

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "Sources";
            next = "Burns";
            srcs = Sources.FallSrcs;
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            srcs = Sources.BurnSrcs;
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            srcs = Sources.PoisonSrcs;
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            srcs = Sources.DrownSrcs;
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            srcs = Sources.CarSrcs;
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            srcs = Sources.ParSrcs;
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
        <MediaButton
              text="Back to Sources"
              onPress={() => this.props.navigation.navigate("Sources")}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></BackButton>
    </View>

<ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}> {this.props.navigation.getParam('topic') + " Resources"}: </Text>

    <View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[0].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[0].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[1].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[1].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[2].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[2].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[3].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[3].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[4].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[4].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[5].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[5].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[6].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[6].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <MainButton
          text={"Go to " + this.props.navigation.getParam('topic')}
          onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('topic'))}
          txtColor={global.text}
    ></MainButton>
    </View>
</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  };
}