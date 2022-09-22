import React, {Component} from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons//BackButton";
import MainButton from "../components/buttons/MainButton";
import MediaButton from "../components/buttons//MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";
import ImageViewer from "react-native-image-zoom-viewer";
import { MM } from "../json/MM.json";

var images;

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

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "Sources";
            next = "Burns";
            images = MM.FallMM.images;
            vids = MM.FallMM.videos;
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            images = MM.BurnMM.images;
            vids = MM.BurnMM.videos;
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            images = MM.PoisonMM.images;
            vids = MM.PoisonMM.videos;
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            images = MM.DrownMM.images;
            vids = MM.DrownMM.videos;
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            images = MM.CarMM.images;
            vids = MM.CarMM.videos;
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            images = MM.ParMM.images;
            vids = MM.ParMM.videos;
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
    <Text allowFontScaling={true} style={CoreStyle.title}>{this.props.navigation.getParam('topic') + "Media"}</Text>
    <View style={CoreStyle.imgview}>
        <ImageViewer imageUrls={images} backgroundColor={global.color}/>
    </View>
</View>

    <VideoPlayer videoID={vids[0].VID}/>

    <VideoPlayer videoID={vids[1].VID}/>

    <View style={CoreStyle.mediaButtons}>
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
  }
}