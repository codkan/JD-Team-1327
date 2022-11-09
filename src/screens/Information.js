import React, {Component} from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CollapsibleBox from "../components/CollapsibleBox";
import TopicButton from "../components/buttons/TopicButton";
import MMButton from "../components/buttons/MMButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import * as Speech from "expo-speech";
import {Content} from "../json/Content.json";
import src from "../assets/buttons/links-line-alt.png";
import mm from "../assets/buttons/media.png";
import right from "../assets/buttons/right.png";
import left from "../assets/buttons/left.png";

//Fall images
import falls from "../assets/fallsMM/falls.png";
import secure from "../assets/fallsMM/secure.png";
import stairs from "../assets/fallsMM/stairs.png";
import window from "../assets/fallsMM/window.png";
import tv from "../assets/fallsMM/TV.png";
import playground from "../assets/fallsMM/playground.png";
import fall1 from "../assets/fallsMM/fall1.png";
import fall2 from "../assets/fallsMM/fall2.png"
import stroller2 from "../assets/fallsMM/stroller2.png";

//Burn images
import bhdr from "../assets/BurnsMM/burn_hdr.png";
import scaldIMG from "../assets/BurnsMM/scald.jpeg";
import outletIMG from "../assets/BurnsMM/outlet.png";
import panIMG from "../assets/BurnsMM/pan.png"
import smokeIMG from "../assets/BurnsMM/smoke.png";
import sunscreenIMG from "../assets/BurnsMM/sunscreen.png";
import cookIMG from "../assets/BurnsMM/cook.png";
import typeIMG from "../assets/BurnsMM/types.png";
import treatmentIMG from "../assets/BurnsMM/treatment.png";

//Poisoning images
import poison_hdr from "../assets/PoisoningsMM/poison_hdr.png";
import pills from "../assets/PoisoningsMM/Pill.png";
import house from "../assets/PoisoningsMM/house.png";
import gas from "../assets/PoisoningsMM/nat_gas.png";
import paint from "../assets/PoisoningsMM/paint.png";
import help from "../assets/PoisoningsMM/help.jpg";
import poison from "../assets/PoisoningsMM/poison.png";
import prevent from "../assets/PoisoningsMM/prevent.png";
import berries from "../assets/PoisoningsMM/berries.png";

//Drowning Images
import drown from "../assets/drownMM/drown.png";
import bath from "../assets/drownMM/bath.png";
import float from "../assets/drownMM/float.png";
import cpr from "../assets/drownMM/cpr.png";
import alone from "../assets/drownMM/alone.png";
import teach from "../assets/drownMM/teach.png";
import drowning from "../assets/drownMM/drowning.png";
import hand from "../assets/drownMM/hand.png";
import pool from "../assets/drownMM/Pool.png";

//Car Safety images
import carSafety from "../assets/carSafetyMM/carSafety.png";
import rearSeat from "../assets/carSafetyMM/rearSeat.png";
import foreSeat from "../assets/carSafetyMM/foreSeat.png";
import boostSeat from "../assets/carSafetyMM/boostSeat.png";
import seatbelt from "../assets/carSafetyMM/seatbelt.png";
import belt from "../assets/carSafetyMM/belt.png";
import safe from "../assets/carSafetyMM/safe.png";
import heat from "../assets/carSafetyMM/heat.png";
import car from "../assets/carSafetyMM/car.png";

//Parental Health images
import ppd2 from "../assets/parentalHealthMM/ppd2.png";
import either from "../assets/parentalHealthMM/either.png";
import mother1 from "../assets/parentalHealthMM/mother1.png";
import father from "../assets/parentalHealthMM/malePPD.png";
import mother2 from "../assets/parentalHealthMM/signs.png";
import ppd5 from "../assets/parentalHealthMM/ppd5.png";
import ppd3 from "../assets/parentalHealthMM/ppd3.png";
import ppd4 from "../assets/parentalHealthMM/ppd4.png";
import ppd6 from "../assets/parentalHealthMM/ppd6.png";

let last;
let next;
let txt;
let img;

export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: global.showAlert,
        };
    }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setModalInvisible = (visible) => {
    global.showAlert = visible;
    this.setState({ modalVisible: global.showAlert });
  }

  handleLastNav = () => {
    this.setState({modalVisible: global.showAlert});
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("Information", {topic: last});
    } else {
        this.goMenu("Information");
    }
  };

  handleNextNav = () => {
    this.setState({modalVisible: global.showAlert});
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Information", {topic: next});
    } else {
        this.props.navigation.navigate("Information", {topic: "Parental Health"});
    }
  };

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "Information"});
  };

  goResources = (_topic) => {
    this.props.navigation.navigate("Resources", {topic: _topic});
  };

  goMedia = (_topic) => {
    this.props.navigation.navigate("Media", {topic: _topic});
  };

  saveSection = async (text) => {
    let save = txt[text];
    let saved = JSON.parse(await AsyncStorage.getItem("saved"));
    saved.push(save);
    let savedTopics = JSON.parse(await AsyncStorage.getItem("savedTopics"));
    savedTopics.push(this.props.navigation.getParam("topic"));
    await AsyncStorage.setItem("saved", JSON.stringify(saved));
    await AsyncStorage.setItem("savedTopics", JSON.stringify(savedTopics));
  }

  interactAlert = async (text) => {
    let reading = await Speech.isSpeakingAsync();
    if (!reading) {
        Alert.alert(
            'Save or Read Text',
            "Would you like to add this section to your bookmarks or read it aloud?",
            [
                {text: 'CLOSE', style: 'destructive'},
                {text: 'READ', style: 'cancel', onPress: () => this.speak(text)},
                {text: 'SAVE', style: 'default', onPress: () => this.saveSection(text)},
            ],
        );
    } else {
        Speech.stop();
    }
  }

    async speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            for (let value of txt) {
                Speech.speak(value.title + ". " + value.body, {rate: 1.1});
            }
        } else {
            Speech.stop();
        }
    }

    async speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(txt[text].title + ". " + txt[text].body, {rate: 1.1});
        } else {
            Speech.stop();
        }
    }

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "";
            next = "Burns";
            txt = Content.FallText;
            img = [falls, secure, stairs, window, tv, playground, fall1, fall2, stroller2];
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            txt = Content.BurnText;
            img = [bhdr, scaldIMG, outletIMG, panIMG, smokeIMG, sunscreenIMG, cookIMG, typeIMG, treatmentIMG];
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            txt = Content.PoisonText;
            img = [poison_hdr, pills, house, gas, paint, help, poison, prevent, berries];
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            txt = Content.DrownText;
            img = [drown, bath, float, cpr, alone, teach, drowning, hand, pool];
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            txt = Content.CarText;
            img = [carSafety, rearSeat, foreSeat, boostSeat, seatbelt, belt, safe, heat, car];
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            txt = Content.ParentText;
            img = [ppd2, either, mother1, father, mother2, ppd5, ppd3, ppd4, ppd6];
            break;
        default:
            break
    }

    const { modalVisible } = this.state;

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MMButton
            img={left}
            txtColor={global.text}
            onPress={this.handleLastNav}
        ></MMButton>
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <MMButton
            img={right}
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></MMButton>
    </View>

    <ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}>{txt[0].title}</Text>

    <TouchableOpacity onPress={() => this.speakAll()}>
        <Image style={CoreStyle.headimg} source={img[0]}/>
    </TouchableOpacity>

<View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        this.setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>How to Use Text-to-Speech</Text>
          <Text style={styles.modalText}>Press the first image to read the entire page aloud</Text>
          <Image style={styles.alertimg} source={img[0]}/>
          <Text style={styles.modalText}>Press any subsection image to read just that section aloud or add it to your bookmarks</Text>
          <Image style={styles.alertimg} source={img[6]}/>
          <Text style={styles.modalText}>Press any image to stop reading aloud at any time</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => this.setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => this.setModalInvisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Do Not Show Again</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
</View>

    <Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[0].body}</Text>

    <Text>{'\n'}</Text>

<CollapsibleBox header={txt[1].title}
    headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.interactAlert(1)}>
        <Image style={CoreStyle.img} source={img[1]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[1].body}</Text>
</CollapsibleBox> 

<CollapsibleBox header={txt[2].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.interactAlert(2)}>
        <Image style={CoreStyle.img} source={img[2]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[2].body}</Text>
</CollapsibleBox> 

<CollapsibleBox header={txt[3].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.interactAlert(3)}>
        <Image style={CoreStyle.img} source={img[3]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[3].body}</Text>
</CollapsibleBox> 


<CollapsibleBox header={txt[4].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.interactAlert(4)}>
        <Image style={CoreStyle.img} source={img[4]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[4].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={txt[5].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.interactAlert(5)}>
        <Image style={CoreStyle.img} source={img[5]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[5].body}</Text>
</CollapsibleBox>

<TouchableOpacity onPress={() => this.interactAlert(6)}>
    <Image style={CoreStyle.img} source={img[6]}/>
</TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[6].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{txt[6].body}</Text>

<TouchableOpacity onPress={() => this.interactAlert(7)}>
    <Image style={CoreStyle.img} source={img[7]}/>
</TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[7].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{txt[7].body}</Text>

    <TouchableOpacity onPress={() => this.interactAlert(8)}>
        <Image style={CoreStyle.img} source={img[8]}/>
    </TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[8].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{txt[8].body}</Text>

<View style={CoreStyle.buttons}>
<MMButton img = {src}
    onPress={() => this.goResources(this.props.navigation.getParam('topic'))}
></MMButton>
<TopicButton
    text={"Review Quiz"}
    onPress={() => this.props.navigation.navigate("Quiz", {topic: this.props.navigation.getParam('topic')})}>
</TopicButton>
<MMButton img = {mm}
    onPress={() => this.goMedia(this.props.navigation.getParam('topic'))}
></MMButton>
</View>

    </ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginBottom: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTitle: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  alertimg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});