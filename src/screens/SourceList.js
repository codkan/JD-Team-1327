import React from "react";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import { Sources } from "../Bib";

var last;
var next;
var srcs;

export default class SourceList extends Component{
    constructor(props) {
        super(props);
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
                    srcs = Sources.CarSrcs;
                    break;
                default:
                    break
            }
    }
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const backToSources = () => {
        navigation.navigate("Sources");
    };
    const handleLastNav = () => {
        navigation.navigate("SourceList", {topic: last});
    };
    const handleNextNav = () => {
        navigation.navigate("SourceList", {topic: next});
    };
    const goToTopic = () => {
        navigation.navigate(this.props.navigation.getParam('topic'));
    };
  render {
    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={backLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Sources"
              onPress={backToSources}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={handleNextNav}
        ></BackButton>
    </View>

<ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}> Fall Sources: </Text>

    <View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[0].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[0].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[1].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[1].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[2].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[2].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[3].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[3].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[4].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[4].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[5].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[5].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[6].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>srcs[6].text</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <MainButton
          text="Go to Falls"
          onPress={goToFalls}
          txtColor={global.text}
    ></MainButton>
    </View>
</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
  }
}