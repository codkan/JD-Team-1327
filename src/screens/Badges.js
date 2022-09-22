/*
 * Badges Screen
 */
import React from "react";
import {
    FlatList,  ScrollView,
    Image, ImageBackground, StyleSheet,
    Text, TouchableOpacity, View, SafeAreaView
} from "react-native";
import { Dimensions } from "react-native";
import Background from "../assets/gameScreens/badgeScreen.png";
import MenuButton from "../components/MenuButton";
import { get } from "../Db";
import * as ScreenOrientation from 'expo-screen-orientation';
import { CoreStyle } from "../components/CoreStyle.js";

let MAX_WIDTH = Dimensions.get("screen").width;
let MAX_HEIGHT = Dimensions.get("screen").height;

function Item({ item }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <View style={CoreStyle.listItem}>
      <Image
        source={item.photo}
        style={{ height: 100, width: 100 }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text allowFontScaling={true} style={{ fontWeight: "bold", color: "black", fontSize: 22 }}>{item.name}</Text>
        <Text allowFontScaling={true} style={{color: "black", paddingTop: MAX_HEIGHT*.02, fontSize:20}}>{item.position}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></TouchableOpacity>
    </View>
  );
}
//Nav callbacks
const goHome = () => {
  navigation.pop();
};

export default class Badges extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  handleReturnToHome = () => {
    this.props.navigation.pop();
  };


  badges = [
    {
      name: "Gold Star Level 1",
      position: "Finished level one in record time!",
      ID: "gold1",
      photo: require("../assets/badges/goldBadge.png"),
    },
    {
      name: "Silver Star Level 1",
      position: "Finished level one in decent time!",
      ID: "silver1",
      photo: require("../assets/badges/silverBadge.png"),
    },
    {
      name: "Bronze Star Level 1",
      position: "Finished level one!",
      ID: "bronze1",
      photo: require("../assets/badges/bronzeBadge.png"),
    },
    {
      name: "Gold Star Level 2",
      position: "Finished level two in record time!",
      ID: "gold2",
      photo: require("../assets/badges/goldBadge.png"),
    },
    {
      name: "Silver Star Level 2",
      position: "Finished level two in decent time!",
      ID: "silver2",
      photo: require("../assets/badges/silverBadge.png"),
    },
    {
      name: "Bronze Star Level 2",
      position: "Finished level two!",
      ID: "bronze2",
      photo: require("../assets/badges/bronzeBadge.png"),
    },
    {
      name: "Gold Star Level 3",
      position: "Finished level three in record time!",
      ID: "gold3",
      photo: require("../assets/badges/goldBadge.png"),
    },
    {
      name: "Silver Star Level 3",
      position: "Finished level three in decent time!",
      ID: "silver3",
      photo: require("../assets/badges/silverBadge.png"),
    },
    {
      name: "Bronze Star Level 3",
      position: "Finished level three!",
      ID: "bronze3",
      photo: require("../assets/badges/bronzeBadge.png"),
    },
    {
      name: "Baby Steps Badge",
      position: "Found the first child safety note!",
      ID: "mark",
      photo: require("../assets/badges/checkmarkBadge.png"),
    },
    {
      name: "Clock Badge",
      position: "Finished in record time!",
      ID: "clock",
      photo: require("../assets/badges/clockBadge.png"),
    },
    {
      name: "Coffee Cup Badge",
      position: "Found the coffee cup with child safety information!",
      ID: "coffee",
      photo: require("../assets/badges/coffeecupBadge.png"),
    },
    {
      name: "Heart Badge",
      position: "You pet the good doggo!",
      ID: "heart",
      photo: require("../assets/badges/heartBadge.png"),
    },
  ];
  async componentDidMount() {
    this.badges.forEach( async element => {
      let earned = await get(element.ID) 
      if (earned === 'true') {
        this.setState(state => {
          const data = state.data.concat(element);
          return {
            data
          }
        })
      }
    });
  }
  render() {
    return (
      <ImageBackground source={Background} style={CoreStyle.image}>
          <FlatList
            style={CoreStyle.contentArea}
            data={this.state.data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.ID}
          />
        <MenuButton txtColor="black" text="GO BACK" onPress={this.handleReturnToHome}></MenuButton>
      </ImageBackground>
    );
  }
}