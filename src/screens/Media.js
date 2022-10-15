import React, {Component} from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons//BackButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons//TopicButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";
import ImageViewer from "react-native-image-zoom-viewer";
import { MM } from "../json/MM.json";

import fall1 from "../assets/fallsMM/falls_infographic.jpg";
import fall2 from "../assets/fallsMM/window_infographic.jpg";
import fall3 from "../assets/fallsMM/tv_infographic.jpg";

import burn1 from "../assets/BurnsMM/bmm1.jpg";
import burn2 from "../assets/BurnsMM/bmm2.png";
import burn3 from "../assets/BurnsMM/bmm3.jpg";

import poison1 from "../assets/PoisoningsMM/PMM2.jpg";
import poison2 from "../assets/PoisoningsMM/PMM3.png";
import poison3 from "../assets/PoisoningsMM/PMM4.jpg";

import drown1 from "../assets/drownMM/Drowning_Infographic.jpg";
import drown2 from "../assets/drownMM/swim_infographic.png";
import drown3 from "../assets/drownMM/water_infographic.jpg";

import car1 from "../assets/carSafetyMM/playSafe.png";
import car2 from "../assets/carSafetyMM/seatbeltPlacement.png";
import car3 from "../assets/carSafetyMM/recalled.jpg";

import par1 from "../assets/parentalHealthMM/ppd1.png";
import par2 from "../assets/parentalHealthMM/pppd_infographic.jpg";
import par3 from "../assets/parentalHealthMM/pmad_infographic.png";

var next;
var last;
var vids;

export default class Media extends Component {
    constructor(props) {
        super(props);
    };

  handleBackNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("Media", {topic: last});
        this.render();
    } else {
        this.goMenu();
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Media", {topic: next});
        this.render();
    } else {
        () => this.props.navigation.navigate("Media", {topic: "Parental Health"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "Media"});
  };

    goInformation = (_topic) => {
      this.props.navigation.navigate("Information", {topic: _topic});
    };

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "";
            next = "Burns";
            var img1 = fall1;
            var img2 = fall2;
            var img3 = fall3;
            vids = MM.FallMM.videos;
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            var img1 = burn1;
            var img2 = burn2;
            var img3 = burn3;
            vids = MM.BurnMM.videos;
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            var img1 = poison1;
            var img2 = poison2;
            var img3 = poison3;
            vids = MM.PoisonMM.videos;
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            var img1 = drown1;
            var img2 = drown2;
            var img3 = drown3;
            vids = MM.DrownMM.videos;
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            var img1 = car1;
            var img2 = car2;
            var img3 = car3;
            vids = MM.CarMM.videos;
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            var img1 = par1;
            var img2 = par2;
            var img3 = par3;
            vids = MM.ParMM.videos;
            break;
        default:
            break
    };

    var images = [
        {
        url: '',
        width: img1.width,
        height: img1.height,
        props: {
            source: img1,
            width: img1.width,
            height: img1.height,
            },
        },
        {
        url: '',
        width: img2.width,
        height: img2.height,
        props: {
            source: img2,
            width: img1.width,
            height: img1.height,
            },
        },
        {
        url: '',
        width: img3.width,
        height: img3.height,
        props: {
            source: img3,
            width: img3.width,
            height: img3.height,
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
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}>{this.props.navigation.getParam('topic') + " Media"}</Text>
    <ImageViewer style={CoreStyle.imgview} imageUrls={images} backgroundColor={global.color}/>

    <VideoPlayer videoID={vids[0].VID}/>
    <VideoPlayer videoID={vids[1].VID}/>
    <VideoPlayer videoID={vids[2].VID}/>

    <View style={CoreStyle.TopicButtons}>
        <MainButton
              text={"Go to " + this.props.navigation.getParam('topic')}
              onPress={() => this.goInformation(this.props.navigation.getParam('topic'))}
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