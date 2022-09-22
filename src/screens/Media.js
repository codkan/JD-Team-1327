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

import fall1 from "../assets/fallsMM/window_infographic.jpg";
import fall2 from "../assets/fallsMM/tv_infographic.jpg";
//import fall3 from "../assets/BurnsMM/bmm3.jpeg";

import burn1 from "../assets/BurnsMM/bmm1.jpeg";
import burn2 from "../assets/BurnsMM/bmm3.jpeg";
import burn3 from "../assets/BurnsMM/bmm4.png";

import poison1 from "../assets/PoisoningsMM/PoisoningMM2.jpg";
import poison2 from "../assets/PoisoningsMM/PMM3.png";
import poison3 from "../assets/PoisoningsMM/PMM5.jpg";

import drown1 from "../assets/drownMM/Drowning_Infographic.png";
//import drown2 from "../assets/BurnsMM/bmm2.png";
//import drown3 from "../assets/BurnsMM/bmm3.jpeg";

import car1 from "../assets/carSafetyMM/playSafe.jpg";
//import car2 from "../assets/BurnsMM/bmm2.png";
//import car3 from "../assets/BurnsMM/bmm3.jpeg";

import par1 from "../assets/parentalHealthMM/ppd1.jpg";
//import par2 from "../assets/BurnsMM/bmm2.png";
//import par3 from "../assets/BurnsMM/bmm3.jpeg";

var img1;
var img2;
var img3;

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
            last = "";
            next = "Burns";
            img1 = fall1;
            img2 = fall2;
            //img3 = fall3;
            vids = MM.FallMM.videos;
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            img1 = burn1;
            img2 = burn2;
            img3 = burn3;
            vids = MM.BurnMM.videos;
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            img1 = poison1;
            img2 = poison2;
            img3 = poison3;
            vids = MM.PoisonMM.videos;
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            img1 = drown1;
            //img2 = drown2;
            //img3 = drown3;
            vids = MM.DrownMM.videos;
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            img1 = car1;
            //img2 = car2;
            //img3 = car3;
            vids = MM.CarMM.videos;
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            img1 = par1;
            //img2 = par2;
            //img3 = par3;
            vids = MM.ParMM.videos;
            break;
        default:
            break
    };

    const images = [
        {
        url: '',
        props: {
            source: img1
            },
        },
        {
        url: '',
        props: {
            source: img2
            },
        },
    ];

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