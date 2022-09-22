import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";
import ImageViewer from "react-native-image-zoom-viewer";

export default class Media extends Component {
    constructor(props) {
        super(props);
    };

  handleBackNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("Media", {topic: last});
    } else {
        this.props.navigation.navigate("Multimedia");
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Media", {topic: next});
    } else {
        () => this.props.navigation.navigate("Media", {topic: "Parental Health"})
    }
  }

    const images = [
        {
        url: '',
        props: {
            source: require("../assets/fallsM/window_infographic.jpg")
            },
        },
        {
        url: '',
        props: {
            source: require("../assets/fallsM/tv_infographic.jpg")
            },
        },
    ];

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
              text="Back to Media"
              onPress={() => this.props.navigation.navigate("Multimedia")}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

<View style={CoreStyle.mediaContainer}>
    <Text allowFontScaling={true} style={CoreStyle.title}> Falls </Text>
    <View style = {CoreStyle.imgview}>
    <ImageViewer imageUrls={images} backgroundColor={global.color}/>
    </View>
</View>

    <VideoPlayer videoID = "i8oifZ7HXaA"/>

    <VideoPlayer videoID = "XyCHsr9NKqY"/>

    <View style={CoreStyle.mediaButtons}>
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